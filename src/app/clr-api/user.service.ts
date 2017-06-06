import { Injectable } from '@angular/core'
import { AuthHttp } from 'angular2-jwt'

import { UserProfile } from '../auth/user-profile'
import { BaseService } from './base.service'

@Injectable()
export class BranchService extends BaseService {
  constructor(public authHttp: AuthHttp) {
    super(authHttp)
    this.baseUrl = `${super.getBaseUrl()}/users`
  }

  fetchById(id: string): Promise<UserProfile>  {
    return super.fetchById(id)
      .then(resUser => resUser as UserProfile)
  }
}
