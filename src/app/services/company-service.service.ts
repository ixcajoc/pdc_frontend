import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { MessageService } from './message-service.service';
import { Company, CompanyList } from '../interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private message: MessageService,

  ) {}

  getAllCompanies(): Observable<CompanyList> {
    return this.http.get<CompanyList>(`${this.url}companies`);
  }

  getCompanyByid(id:string): Observable<Company>{
    return this.http.get<Company>(`${this.url}companies/${id}`);
  }

  newCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.url}companies`, company);
  }
   
  updateCompany(id: number, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.url}companies/${id}`, company);
  }

 
  deleteCompany(id: number): Observable<{ success: boolean; message?: string }> {
    return this.http.delete<{ success: boolean; message?: string }>(`${this.url}companies/${id}`);
  }
  


}
