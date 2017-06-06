import { Injectable } from '@angular/core'
import { AuthHttp } from 'angular2-jwt'
import 'rxjs/add/operator/toPromise'

import { environment as env } from '../../environments/environment'


@Injectable()
export class BaseService {
  private _baseUrl = env.baseApiUrl

  constructor(public authHttp: AuthHttp) {
  }

  protected handleError(error: any) {
    return Promise.reject(error.message || error)
  }

  getBaseUrl() {
    return this._baseUrl
  }

  set baseUrl(url) {
    this._baseUrl = url
  }

  fetch(page?: number): Promise<any[]> {
    return this.authHttp
      .get(this.baseUrl)
      .toPromise()
      .then(res =>
        res.json() as any[])
      .catch(this.handleError)
  }

  fetchById(id: string): Promise<any> {
    return this.authHttp
      .get(`${this.baseUrl}/${id}`)
      .toPromise()
      .catch(this.handleError)
  }
}
