import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidePanelComponent } from './side-panel/side-panel.component'
import { SidePanelContainerComponent } from './side-panel-container/side-panel-container.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SidePanelContainerComponent,
    SidePanelComponent
  ],
  exports: [
    SidePanelContainerComponent,
    SidePanelComponent
  ],
})
export class SidePanelModule { }
