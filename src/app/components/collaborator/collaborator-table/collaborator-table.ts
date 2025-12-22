import { Component, Input } from '@angular/core';
import { Collaborator } from '../../../interfaces/collaborator.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-collaborator-table',
  imports: [],
  templateUrl: './collaborator-table.html',
  styleUrl: './collaborator-table.css'
})
export class CollaboratorTable {

  @Input() tableData!: Collaborator[];

  constructor(
    private router: Router,
  ){}

  detailCollaborator(collaboratorID: number) {
    this.router.navigate([`/dashboard1/detail-collaborador/${collaboratorID}`]);
  }


}
