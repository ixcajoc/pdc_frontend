import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Banner } from '../../../shared/banner/banner';
import { Company } from '../../../interfaces/company.interface';
import { MessageService } from '../../../services/message-service.service';
import { CompanyService } from '../../../services/company-service.service';

@Component({
  selector: 'app-new-company',
  imports: [
     CommonModule,
    RouterModule,
    ReactiveFormsModule,
    Banner
  ],
  templateUrl: './new-company.html',
  styleUrl: './new-company.css'
})
export class NewCompanyComponent {

  
  companyForm: FormGroup;
  company!: Company;


  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private companyService: CompanyService

  ) 
  {
    this.companyForm = this.fb.group({
      nit: ['', Validators.required],
      businessName: ['', Validators.required],
      commercialName: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      department: ['', Validators.required],
      municipality: ['', Validators.required],
    });
  }

  ngOnInit(){

  }

  newCompany(){
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }
    let newCompany: Company = {
      nit: this.companyForm.value.nit ?? '',
      businessName: this.companyForm.value.businessName ?? '',
      commercialName: this.companyForm.value.commercialName ?? '',
      phone: this.companyForm.value.phone ?? '',
      email: this.companyForm.value.email ?? '',
      country: this.companyForm.value.country ?? '',
      department: this.companyForm.value.department ?? '',
      municipality: this.companyForm.value.municipality ?? ''
    };

    console.log(newCompany);

    this.companyService.newCompany(newCompany).subscribe({
      next: (response)=> {
        this.messageService.successAlert()
        this.router.navigate([`dashboard1/companies`]);
      },
      error: (error) => {
        this.messageService.errorAlert(error)
      }
    });
  }

  cancelarNew(){
      this.router.navigate([`dashboard1/companies`]);
  }


}
