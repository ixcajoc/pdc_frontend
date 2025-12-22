import { Component, Input } from '@angular/core';
import { Company } from '../../../interfaces/company.interface';

@Component({
  selector: 'app-table-company',
  imports: [],
  templateUrl: './table-company.html',
  styleUrl: './table-company.css'
})
export class TableCompany {

  @Input() tableData!: Company[];

}
