import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { tokenNotExpired } from 'angular2-jwt'
import * as Auth0 from 'auth0-js'
import { environment as env } from '../environments/environment'

const TOKEN_NAME = 'token'
const ID_TOKEN_NAME = 'id_token'
const PROFILE_NAME = 'profile'

@Injectable()
export class AuthService {

  auth0 = new Auth0.WebAuth({
    clientID: env.auth0.clientID,
    domain: env.auth0.clientDomain,
  })

  authOpts = {
    responseType: 'token id_token',
    redirectUri: env.auth0.redirectUri,
    audience: env.auth0.audience,
    scope: env.auth0.scope,
  }

  loggedIn: boolean
  loggedIn$ = new BehaviorSubject(this.loggedIn)
  error: object
  errors$ = new BehaviorSubject(this.error)

  constructor(private router: Router) {
    if (this.authenticated) {
      this.setLoggedIn(true)
    }
  }

  get authenticated() {
    // Check if there's an unexpired access token
    return tokenNotExpired(TOKEN_NAME)
  }

  get user() {
    return JSON.parse(localStorage.getItem(PROFILE_NAME))
  }

  private setSession(authResult, profile) {
    localStorage.setItem(TOKEN_NAME, authResult.accessToken)
    localStorage.setItem(ID_TOKEN_NAME, authResult.idToken)
    localStorage.setItem(PROFILE_NAME, JSON.stringify(profile))
    this.setLoggedIn(true)
  }

  private getProfile(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this.setSession(authResult, profile)
    })
  }

  private handleError(err) {
    this.error = err
    this.errors$.next(err)
  }

  setLoggedIn(val: boolean) {
    this.loggedIn = val
    this.loggedIn$.next(this.loggedIn)
  }

  login() {
    if (env.auth0.popup) {
      this.auth0.popup.authorize(this.authOpts, this.handleAuth.bind(this))
    } else {
      this.auth0.authorize(this.authOpts)
    }
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME)
    localStorage.removeItem(ID_TOKEN_NAME)
    localStorage.removeItem(PROFILE_NAME)
    this.router.navigate(['/'])
    this.setLoggedIn(false)
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash(null, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // remove hash from callback url
        window.location.hash = ''
        this.getProfile(authResult)
        this.router.navigate(['/home'])
      } else if (err) {
        this.router.navigate(['/home'])
        this.handleError(err)
      }
    })
  }
}
