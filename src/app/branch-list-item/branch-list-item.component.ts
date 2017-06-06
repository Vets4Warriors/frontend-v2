import { Component, OnInit, Input } from '@angular/core'
import { Branch } from '../clr-api/branch'

@Component({
  selector: 'app-branch-list-item',
  templateUrl: './branch-list-item.component.html',
  styleUrls: ['./branch-list-item.component.scss']
})
export class BranchListItemComponent implements OnInit {
  @Input()
  branch: Branch

  constructor() { }

  ngOnInit() {
  }

}
