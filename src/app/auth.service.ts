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

  loggedIn: boolean
  loggedIn$ = new BehaviorSubject(this.loggedIn)

  constructor(private router: Router) {
    if (this.authenticated) {
      this.setLoggedIn(true)
    }
  }

  get authenticated() {
    // Check if there's an unexpired access token
    return tokenNotExpired(TOKEN_NAME)
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

  setLoggedIn(val: boolean) {
    this.loggedIn = val
    this.loggedIn$.next(this.loggedIn)
  }

  login() {
    this.auth0.authorize({
      responseType: 'token id_token',
      redirectUri: env.auth0.redirectUri,
      audience: env.auth0.audience,
      scope: env.auth0.scope,
    })
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash(null, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = ''
        this.getProfile(authResult)
        this.router.navigate(['/'])
      } else if (err) {
        this.router.navigate(['/'])
        // console.error(`Error: ${err.error}`)
      }
    })
  }

}