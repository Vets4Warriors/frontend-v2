import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { AuthService } from '../auth/auth.service'
import { Branch } from '../branch'
import { BranchService } from '../branch.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageName = 'Home'
  protected branches: Branch[] = []
  protected loading = false

  // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(private authService: AuthService,
              private titleService: Title,
              private branchService: BranchService
              ) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageName)
    if (this.authService.authenticated) {
      // Fetch branches
      this.fetchBranches()
    }
  }

  async fetchBranches(query?: string) {
    this.loading = true
    this.branches = await this.branchService.fetch()
    this.loading = false
  }

}
