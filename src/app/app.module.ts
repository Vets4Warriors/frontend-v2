import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AuthHttp, AuthConfig } from 'angular2-jwt'
import { MdToolbarModule, MdProgressSpinnerModule, MdButtonModule } from '@angular/material'
import { RouterModule, Routes } from '@angular/router'
import { VirtualScrollModule } from 'angular2-virtual-scroll'

import 'hammerjs'
import { AgmCoreModule } from '@agm/core'
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { AuthModule } from './auth/auth.module';

import { BranchService } from './branch.service'
import { HomeComponent } from './home/home.component'
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component'
import { LoginComponent } from './login/login.component';
import { BranchListItemComponent } from './branch-list-item/branch-list-item.component'

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'authcallback', component: AuthCallbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BranchListItemComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    VirtualScrollModule,
    // All material modules
    MdToolbarModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    // Setup maps
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.apiKey,
    }),
    // Setup router
    RouterModule.forRoot(ROUTES),
    // Setup analytics
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [
    BranchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
