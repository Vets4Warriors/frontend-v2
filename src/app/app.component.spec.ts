import { TestBed, async } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { RouterOutlet } from '@angular/router'
import { AgmMap } from '@agm/core'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RouterOutlet, AgmMap
      ],
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it('should render as a router-outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('router-outlet')).toBeTruthy()
  }))

  it('should render a map', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('sebm-google-map')).toBeTruthy()
  }))
})
