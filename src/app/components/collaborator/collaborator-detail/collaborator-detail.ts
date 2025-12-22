import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company-service.service';
import { MessageService } from '../../../services/message-service.service';
import { Collaborator } from '../../../interfaces/collaborator.interface';
import { CollaboratorService } from '../../../services/collaborator-service.service';
import Swal from 'sweetalert2';
import { Banner } from "../../../shared/banner/banner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collaborator-detail',
  imports: [
    Banner,
    CommonModule
  ],
  templateUrl: './collaborator-detail.html',
  styleUrl: './collaborator-detail.css'
})
export class CollaboratorDetail {
  
    
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private router: Router,
    private messageService: MessageService,
    private collaboratorService: CollaboratorService,

  ){} 
    
  ngOnInit():void{
    this.getCollaboratorByID();
  }

  collaborator!: Collaborator;

  getCollaboratorByID() {
    const collaboratorID = this.route.snapshot.params['id'];
    this.collaboratorService.getCollaboratorByid(collaboratorID).subscribe({
      next: (response) => {
        this.collaborator = response.data; // Accede a la propiedad data
      },
      error: (error) => console.log(error)
    });
  }

  GoUpdateCollaborator(){
    // const companyID = this.route.snapshot.params['id'];
    this.router.navigate([`dashboard1/update-collaborator/${this.collaborator.collaboratorID}`]);
  }
  


  confirmarEliminar(id: number, registro:string ) {
    Swal.fire({
      title: '¿Estás seguro?',
      html: `Se eliminará <strong>${registro}</strong>.<br>Esta acción no se puede revertir.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#2563eb',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      focusCancel: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCollaborator(id);
      }
    });
  }

  // Eliminar registro
  deleteCollaborator(id: number) {
    this.collaboratorService.deleteColaborrator(id).subscribe({
      next: (response) => {
        console.log('Colaborador eliminado:', response);
        this.router.navigate([`dashboard1/collaborators`]);
              
        Swal.fire({
          title: '¡Eliminado!',
          text: 'Colaborador eliminado correctamente.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      },
      error: (error) => {
        console.error('Error al eliminar el Colaborador:', error);
        const errorMessage = error.error?.message || 'Error desconocido al eliminar el registro';
        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#3b82f6'
        });
      }
    });
  }
}
