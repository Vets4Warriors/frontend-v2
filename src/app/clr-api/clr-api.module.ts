import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BranchService } from './branch.service'
import { OrganizationService } from './organization.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BranchService,
    OrganizationService,
  ]
})
export class ClrApiModule {
}
