import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Banner } from '../../../shared/banner/banner';
import { Company } from '../../../interfaces/company.interface';
import { MessageService } from '../../../services/message-service.service';
import { CompanyService } from '../../../services/company-service.service';
import { Collaborator } from '../../../interfaces/collaborator.interface';
import { CollaboratorService } from '../../../services/collaborator-service.service';

@Component({
  selector: 'app-new-collaborator',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    Banner
  ],
  templateUrl: './new-collaborator.html',
  styleUrl: './new-collaborator.css'
})
export class NewCollaborator {

  collaboratorForm: FormGroup;
  colaborator!: Collaborator;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private collaboratorService: CollaboratorService,

  ) 
  {
    this.collaboratorForm = this.fb.group({
      companyID: ['', Validators.required],
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(){

  }

  newCollaborator(){
    if (this.collaboratorForm.invalid) {
      this.collaboratorForm.markAllAsTouched();
      return;
    }
    let newCollaborator: Collaborator = {
      companyID: this.collaboratorForm.value.companyID ?? '',
      fullName: this.collaboratorForm.value.fullName ?? '',
      age: this.collaboratorForm.value.age ?? '',
      phone: this.collaboratorForm.value.phone ?? '',
      email: this.collaboratorForm.value.email ?? '',
    };

    console.log(newCollaborator);

    this.collaboratorService.newCollaborator(newCollaborator).subscribe({
      next: (response)=> {
        this.messageService.successAlert()
        this.router.navigate([`dashboard1/collaborators`]);
      },
      error: (error) => {
        this.messageService.errorAlert(error)
      }
    });
  }

  cancelarNew(){
      this.router.navigate([`dashboard1/collaborators`]);
  }


}
