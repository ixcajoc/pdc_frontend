import { Component } from '@angular/core';
import { CollaboratorService } from '../../services/collaborator-service.service';
import { Router } from '@angular/router';
import { Collaborator } from '../../interfaces/collaborator.interface';
import { Banner } from "../../shared/banner/banner";
import { CollaboratorTable } from "./collaborator-table/collaborator-table";
import { ExportButton } from "../../shared/export-button/export-button";

@Component({
  selector: 'app-collaborator',
  imports: [Banner, CollaboratorTable, ExportButton],
  templateUrl: './collaborator.html',
  styleUrl: './collaborator.css'
})
export class CollaboratorComponent {
  
  constructor(
    private collaboratorService: CollaboratorService,
    private router: Router,

  ) {}
  
  ngOnInit():void{
    this.getCompanies();
  }

  collaboratorList: Collaborator[] = []

  getCompanies(){
    this.collaboratorService.getAllCollaborators().subscribe({
      next:(response)=>{
        this.collaboratorList = response.data;
        console.log(this.collaboratorList);
      },
      error: (error) => (console.log(error))
    });
  }

  goToNewCollaborator(){
    this.router.navigate([`dashboard1/new-collaborator`]);
  }

}
