import { Component, OnInit } from '@angular/core'
import { style, state, trigger, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-side-panel-container',
  templateUrl: './side-panel-container.component.html',
  styleUrls: ['./side-panel-container.component.scss'],
  animations: [
    trigger('slideOpenClosed', [
      state('closed', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('open', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('closed => open', animate('400ms ease-in-out')),
      transition('open => closed', animate('400ms ease-in-out')),
    ])
  ],
})
export class SidePanelContainerComponent implements OnInit {
  isOpen = true

  constructor() {
  }

  get state(): string {
    return this.isOpen ? 'open' : 'closed'
  }


  ngOnInit() {
  }

  toggle(isOpen?: boolean) {
    if (isOpen !== undefined) {
      this.isOpen = this.isOpen
    } else {
      this.isOpen = !this.isOpen
    }
  }

}
