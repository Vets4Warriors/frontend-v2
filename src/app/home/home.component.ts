import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AuthService],
})
export class HomeComponent implements OnInit {

  // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
