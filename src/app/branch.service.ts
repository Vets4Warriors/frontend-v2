import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { AuthHttp } from 'angular2-jwt'
import 'rxjs/add/operator/toPromise'

import { environment as env } from '../environments/environment'
import { Branch } from './branch'

@Injectable()
export class BranchService {
  private branchesUrl = `${env.baseApiUrl}/branches`

  constructor(private http: Http, private authHttp: AuthHttp) {}

  private handleError(error: any) {
    return Promise.reject(error.message || error)
  }

  fetch(page?: number): Promise<Branch[]> {
    return this.authHttp
      .get(this.branchesUrl)
      .toPromise()
      .then(res => res.json() as Branch[])
      .catch(this.handleError)
  }

  fetchById(id: string): Promise<Branch>  {
    return this.authHttp
      .get(`${this.branchesUrl}/${id}`)
      .toPromise()
      .then(res => res.json() as Branch)
      .catch(this.handleError)
  }
}
