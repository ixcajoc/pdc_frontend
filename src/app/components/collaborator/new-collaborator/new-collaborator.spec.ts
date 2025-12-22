import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollaborator } from './new-collaborator';

describe('NewCollaborator', () => {
  let component: NewCollaborator;
  let fixture: ComponentFixture<NewCollaborator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCollaborator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCollaborator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
