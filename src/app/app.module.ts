import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AuthHttp, AuthConfig } from 'angular2-jwt'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MdToolbarModule,
  MdProgressSpinnerModule,
  MdButtonModule,
  MdSnackBarModule,
} from '@angular/material'
import { RouterModule, Routes } from '@angular/router'
import { VirtualScrollModule } from 'angular2-virtual-scroll'

import 'hammerjs'
import { AgmCoreModule } from '@agm/core'
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { AuthModule } from './auth/auth.module'

import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { BranchListItemComponent } from './branch-list-item/branch-list-item.component'
import { BranchService } from './branch.service'

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
    BranchListItemComponent,
  ],
  imports: [
    // Local Modules
    AuthModule,
    // Vendor Modules
    BrowserModule,
    HttpModule,
    FormsModule,
    VirtualScrollModule,
    // All material modules
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
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
