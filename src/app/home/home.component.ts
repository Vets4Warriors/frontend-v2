import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core'
import { MdSnackBar } from '@angular/material'
import { ChangeEvent } from 'angular2-virtual-scroll'
import { AuthService } from '../auth/auth.service'
import { Branch } from '../clr-api/branch'
import { BranchService } from '../clr-api/branch.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageName = 'Home'
  // All loaded branches
  protected branches: Branch[] = []
  // All branches in view
  protected viewBranches: Branch[] = []
  protected loading = false

  // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(private authService: AuthService,
              private titleService: Title,
              private branchService: BranchService,
              private snackBar: MdSnackBar,
              ) { }

  ngOnInit() {
    this.titleService.setTitle(this.pageName)
    this.authService.loggedIn$
      .subscribe(
        this.handleLoggedIn.bind(this),
        this.handleError.bind(this),
      )
  }

  test(event: ChangeEvent) {
    console.log(event)
    this.viewBranches = event as Branch[]
  }

  handleLoggedIn(loggedIn: boolean) {
    if (loggedIn) {
      this.fetchBranches()
    }
  }

  handleError(err: Error) {
    this.snackBar.open('Can\'t reach the server! Plase check your connection.', null, {
      duration: 5000,
    })
  }

  async fetchBranches(query?: string) {
    this.loading = true
    try {
      this.branches = await this.branchService.fetch()
    } catch (err) {
      this.handleError(err)
    }
    this.loading = false
  }

}
