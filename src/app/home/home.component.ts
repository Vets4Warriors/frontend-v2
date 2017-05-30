import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Branch } from '../branch'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected branches: Branch[] = []
  protected loading = false

  // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.authenticated) {
      // Fetch branches
      this.fetchBranches()
    }
  }

  fetchBranches(query?: string) {
    this.loading = true
    setTimeout(() => {
      this.branches = ['hey', 'there']
      this.loading = false
    }, 1000)
  }

}
