import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorTable } from './collaborator-table';

describe('CollaboratorTable', () => {
  let component: CollaboratorTable;
  let fixture: ComponentFixture<CollaboratorTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
