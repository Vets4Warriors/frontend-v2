import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MaterialModule } from '@angular/material'
import 'hammerjs'
import { AgmCoreModule } from 'angular2-google-maps/core'
import { AngularFireModule } from 'angularfire2'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'

export const firebaseConfig = environment.firebase


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
      apiKey: 'AIzaSyAKp_twX1LFjrdJY2YlL4PUn986ca3y21E'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
