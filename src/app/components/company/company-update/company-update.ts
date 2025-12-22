import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MessageService } from '../../../services/message-service.service';
import { CompanyService } from '../../../services/company-service.service';
import { Company } from '../../../interfaces/company.interface';
import { CommonModule } from '@angular/common';
import { Banner } from "../../../shared/banner/banner";

@Component({
  selector: 'app-company-update',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    Banner
],
  templateUrl: './company-update.html',
  styleUrl: './company-update.css'
})
export class CompanyUpdateComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
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

    this.getCompanyById()
  }

  getCompanyById() {
    const id = this.route.snapshot.params['id'];

    this.companyService.getCompanyByid(id).subscribe({
      next: (response)=> {
        console.log(response.data)
        this.company = response.data;

        this.companyForm.patchValue({
          nit: this.company.nit,
          businessName: this.company.businessName,
          commercialName: this.company.commercialName,
          phone: this.company.phone,
          email: this.company.email,
          country: this.company.country,
          department: this.company.department,
          municipality: this.company.municipality
        });

      },
      error: (error) => {console.log(error)}
    });
  }

  updateCompany(){
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }
    let editedCompany: Company = {
      nit: this.companyForm.value.nit ?? '',
      businessName: this.companyForm.value.businessName ?? '',
      commercialName: this.companyForm.value.commercialName ?? '',
      phone: this.companyForm.value.phone ?? '',
      email: this.companyForm.value.email ?? '',
      country: this.companyForm.value.country ?? '',
      department: this.companyForm.value.department ?? '',
      municipality: this.companyForm.value.municipality ?? ''
    };

    console.log(editedCompany);

    this.companyService.updateCompany(this.company.companyID!, editedCompany).subscribe({
      next: (response)=> {
        this.messageService.successAlert()
        this.router.navigate([`dashboard1/detail-company/${this.company.companyID}`]);
      },
      error: (error) => {
        // alert(`Algo salio mal: ${error}`);
        this.messageService.errorAlert(error)
      }
    });
  }

  cancelarUpdate(){
      this.router.navigate([`dashboard1/detail-company/${this.company.companyID}`]);
  }

}
