import { Component } from '@angular/core'
import { Routes } from '@angular/router'
import { Angulartics2GoogleAnalytics } from 'angulartics2'
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  constructor(atics: Angulartics2GoogleAnalytics, private authService: AuthService) {}
}
