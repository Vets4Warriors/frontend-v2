import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core'

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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
