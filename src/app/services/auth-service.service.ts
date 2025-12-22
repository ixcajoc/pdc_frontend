import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from './message-service.service';
import { Observable } from 'rxjs';

export interface UserLogin {
    username: string,
    password: string
  }
  // *********************************//
  // Las claves de acceso del Login son://
  // usuario: admin//
  // clave: admin123//
  // *********************************//

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private message: MessageService,

  ) {}

  
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
  
  // auth(post: UserLogin) {
  
  //  return this.http.post<any>(`${this.url}auth/login`, post);
  // }

  // userAutenticated(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // 'Authorization': `Bearer ${this.getToken()}`
  //   });

  //   return this.http.get<any>(`${this.url}auth/profile`, { headers });
  // }
  // getToken() {
  //   return localStorage.getItem('token');
  // }
  // setToken(token:string): void {
  //   localStorage.setItem('token', token);
  // }

  // setUserAutenticated(currentUser:any): void {
  //   localStorage.setItem('current-user', currentUser);
  // }
  // getUserAutenticated(){
  //   return localStorage.getItem('current-user');
  // }


  // auth(post: UserLogin) {
  //   return this.http.post<any>(`${this.url}auth/login`, post);
  // }

  // auth(post: UserLogin){
  //   return this.http.post<any>(`${this.url}auth/login`,post).subscribe({
  //     next: (response)=> { 
  //       this.setToken(response.data.token);
  //       // this.userAutenticated();
        
  //       this.router.navigate(['/dashboard1']); 
  //     },
  //     error: (error) => {
  //       error;
  //       // alert(error.error.message);
  //       this.message.errorAlert(error.message);
  //     } 
  //   }); 
  // }
  
  // userAutenticated(){
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.getToken()}`
  //   });
  //   return this.http.get<any>(`${this.url}auth/profile`, { headers }).subscribe({
  //     next: (response)=> {
  //       console.log(response.data)
  //       // this.setUserAutenticated(response.data)
  //     },
  //     error: (error) => {error}
  //   });
  // }

}
