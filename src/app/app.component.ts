import { Component } from '@angular/core'
import { Angulartics2GoogleAnalytics } from 'angulartics2'
import { BranchService } from './clr-api/branch.service'
import { AuthService } from './auth/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(atics: Angulartics2GoogleAnalytics,
              private authService: AuthService) {}
}
