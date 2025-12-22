import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColaborador } from './update-colaborador';

describe('UpdateColaborador', () => {
  let component: UpdateColaborador;
  let fixture: ComponentFixture<UpdateColaborador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateColaborador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateColaborador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
