import { Injectable } from '@angular/core'
import { AuthHttp } from 'angular2-jwt'

import { BaseService } from './base.service'
import { Organization } from './organization'

@Injectable()
export class BranchService extends BaseService {
  constructor(public authHttp: AuthHttp) {
    super(authHttp)
    this.baseUrl = `${super.getBaseUrl()}/organizations`
  }

  fetch(page?: number): Promise<Organization[]> {
    return super.fetch(page)
      .then(resArr => resArr as Organization[])
  }

  fetchById(id: string): Promise<Organization>  {
    return super.fetchById(id)
      .then(resOrg => resOrg as Organization)
  }
}
