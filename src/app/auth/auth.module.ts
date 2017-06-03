import { NgModule } from '@angular/core'
import { Http, RequestOptions } from '@angular/http'
import { AuthHttp, AuthConfig } from 'angular2-jwt'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { AuthCallbackComponent } from './auth-callback/auth-callback.component'

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options)
}


@NgModule({
  declarations: [
    AuthCallbackComponent,
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthModule {}
