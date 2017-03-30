import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MaterialModule } from '@angular/material'
import { Location } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs'
import { AgmCoreModule } from 'angular2-google-maps/core'
import { AngularFireModule } from 'angularfire2'
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'

export const firebaseConfig = environment.firebase


const ROUTES: Routes = [
  { path: '',      component: AppComponent },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.apiKey,
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(ROUTES),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
