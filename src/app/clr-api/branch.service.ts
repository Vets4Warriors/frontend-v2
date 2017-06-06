import { Injectable } from '@angular/core'
import { AuthHttp } from 'angular2-jwt'

import { Branch } from './branch'
import { BaseService } from './base.service'

@Injectable()
export class BranchService extends BaseService {
  constructor(public authHttp: AuthHttp) {
    super(authHttp)
    this.baseUrl = `${super.getBaseUrl()}/branches`
  }

  fetch(page?: number): Promise<Branch[]> {
    return super.fetch(page)
      .then(resArr => resArr as Branch[])
  }

  fetchById(id: string): Promise<Branch>  {
    return super.fetchById(id)
      .then(resBranch => resBranch as Branch)
  }
}
