import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MdToolbarModule, MdButtonModule } from '@angular/material'
import { RouterModule, Routes } from '@angular/router'

import 'hammerjs'
import { AgmCoreModule } from '@agm/core'
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { BranchService } from './branch.service'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './auth.guard'
import { AuthCallbackComponent } from './auth-callback/auth-callback.component'
import { LoginComponent } from './login/login.component'

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'authcallback', component: AuthCallbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthCallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // All material modules
    MdToolbarModule,
    MdButtonModule,
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
