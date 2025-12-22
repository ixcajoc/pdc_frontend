import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDashboard } from './panel-dashboard';

describe('PanelDashboard', () => {
  let component: PanelDashboard;
  let fixture: ComponentFixture<PanelDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
