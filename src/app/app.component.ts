import { Component } from '@angular/core'
import { Routes } from '@angular/router'
import { Angulartics2GoogleAnalytics } from 'angulartics2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!'
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}
