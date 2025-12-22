import { Component, inject } from '@angular/core';
import { CompanyService } from '../../../services/company-service.service';
import { Company, CompanyList,CompanyDetail } from '../../../interfaces/company.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Banner } from "../../../shared/banner/banner";
import Swal from 'sweetalert2';
import { MessageService } from '../../../services/message-service.service';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule, Banner],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.css'
})
export class CompanyDetailComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private messageService: MessageService,

  ){} 
    
  ngOnInit():void{
    this.getCompanyByID();
  }

  company!: Company;

  getCompanyByID() {
    const companyID = this.route.snapshot.params['id'];
    this.companyService.getCompanyByid(companyID).subscribe({
      next: (response) => {
        this.company = response.data; // Accede a la propiedad data
      },
      error: (error) => console.log(error)
    });
  }

  GoUpdateCompany(){
    // const companyID = this.route.snapshot.params['id'];
    this.router.navigate([`dashboard1/update-company/${this.company.companyID}`]);
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
        this.deleteCompany(id);
      }
    });
  }

  // Eliminar registro
  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe({
      next: (response) => {
        console.log('Usuario eliminado:', response);
        this.router.navigate([`dashboard1/companies`]);   
        Swal.fire({
          title: '¡Eliminado!',
          text: 'Usuario eliminado correctamente.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
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
