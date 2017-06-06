import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelContainerComponent } from './side-panel-container.component';

describe('SidePanelContainerComponent', () => {
  let component: SidePanelContainerComponent;
  let fixture: ComponentFixture<SidePanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
