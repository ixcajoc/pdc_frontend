import { Component } from '@angular/core';
import { CompanyService } from '../../services/company-service.service';
import { CommonModule } from '@angular/common';
import { TableCompany } from './table-company/table-company';
import { Company, CompanyList } from '../../interfaces/company.interface';
import { Banner } from "../../shared/banner/banner";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-company',
  imports: [
    CommonModule,
    TableCompany,
    Banner,
    RouterLink
],
  templateUrl: './company.html',
  styleUrl: './company.css'
})
export class CompanyComponent {

  constructor(
    private companyService: CompanyService,
    private router: Router,

  ) {}
  
  ngOnInit():void{
    this.getCompanies();
  }

  companyList: Company[] = []

  getCompanies(){
    this.companyService.getAllCompanies().subscribe({
      next:(response)=>{
        this.companyList = response.data;
        console.log(this.companyList);
      },
      error: (error) => (console.log(error))
    });
  }

  goToNewCompany(){
    this.router.navigate([`dashboard1/new-company`]);
  }

  
}
