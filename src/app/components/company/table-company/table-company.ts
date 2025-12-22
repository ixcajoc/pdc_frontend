import { Component, Input } from '@angular/core';
import { Company } from '../../../interfaces/company.interface';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-table-company',
  imports: [],
  templateUrl: './table-company.html',
  styleUrl: './table-company.css'
})
export class TableCompany {

  @Input() tableData!: Company[];

  constructor(
    private router: Router,
  ){}

  detailCompany(companyID: number) {
    this.router.navigate([`/dashboard1/detail-company/${companyID}`]);
  }

}
