import { Component, inject } from '@angular/core';
import { CompanyService } from '../../../services/company-service.service';
import { Company, CompanyList,CompanyDetail } from '../../../interfaces/company.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Banner } from "../../../shared/banner/banner";

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

}
