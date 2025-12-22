import { Component } from '@angular/core';
import { CompanyService } from '../../../services/company-service.service';
import { Company } from '../../../interfaces/company.interface';

@Component({
  selector: 'app-company-detail',
  imports: [],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.css'
})
export class CompanyDetail {

  
    constructor(
        private companyService: CompanyService,
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

}
