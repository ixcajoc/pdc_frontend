import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Banner } from '../../../shared/banner/banner';

import { MessageService } from '../../../services/message-service.service';
import { CollaboratorService } from '../../../services/collaborator-service.service';
import { Collaborator } from '../../../interfaces/collaborator.interface';

@Component({
  selector: 'app-update-colaborador',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    Banner
  ],
  templateUrl: './update-colaborador.html',
  styleUrl: './update-colaborador.css'
})
export class UpdateColaborador {

  
  collaboratorForm: FormGroup;
  collaborator!: Collaborator;
  route: ActivatedRoute = inject(ActivatedRoute);


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

    this.getCollaboratorByID();
  }

  getCollaboratorByID() {
    const id = this.route.snapshot.params['id'];

    this.collaboratorService.getCollaboratorByid(id).subscribe({
      next: (response)=> {
        // console.log(response.data)
        this.collaborator = response.data;

        this.collaboratorForm.patchValue({
          companyID: this.collaborator.companyID,
          fullName: this.collaborator.fullName,
          age: this.collaborator.age,
          phone: this.collaborator.phone,
          email: this.collaborator.email,
        });

      },
      error: (error) => {console.log(error)}
    });
  }

  updateCollaborator(){
      if (this.collaboratorForm.invalid) {
        this.collaboratorForm.markAllAsTouched();
        return;
      }
      let editedCollaborator: Collaborator = {
        companyID: this.collaboratorForm.value.companyID ?? '',
        fullName: this.collaboratorForm.value.fullName ?? '',
        age: this.collaboratorForm.value.age ?? '',
        phone: this.collaboratorForm.value.phone ?? '',
        email: this.collaboratorForm.value.email ?? '',
      };
  
      console.log(editedCollaborator);
  
      this.collaboratorService.updateCollaborator(this.collaborator.collaboratorID!, editedCollaborator).subscribe({
        next: (response)=> {
          this.messageService.successAlert()
          this.router.navigate([`dashboard1/detail-collaborador/${this.collaborator.collaboratorID}`]);
        },
        error: (error) => {
          // alert(`Algo salio mal: ${error}`);
          this.messageService.errorAlert(error)
        }
      });
    }

  cancelarNew(){
      this.router.navigate([`dashboard1/collaborators`]);
  }

}
