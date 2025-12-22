import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorDetail } from './collaborator-detail';

describe('CollaboratorDetail', () => {
  let component: CollaboratorDetail;
  let fixture: ComponentFixture<CollaboratorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
