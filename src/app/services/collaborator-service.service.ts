import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { MessageService } from './message-service.service';
import { CollaboratorList } from '../interfaces/collaborator.interface';
import { Collaborator } from '../components/collaborator/collaborator';
import { CollaboratorDetail } from '../components/collaborator/collaborator-detail/collaborator-detail';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  private url = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private message: MessageService,

  ) {}

  getAllCollaborators(): Observable<CollaboratorList> {
    return this.http.get<CollaboratorList>(`${this.url}collaborators`);
  }

  getCollaboratorByid(id:string): Observable<CollaboratorDetail>{
    return this.http.get<CollaboratorDetail>(`${this.url}collaborators/${id}`);
  }

  newCollaborator(collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(`${this.url}collaborators`, collaborator);
  }
   
  updateCollaborator(id: number, collaborator: Collaborator): Observable<Collaborator> {
    return this.http.put<Collaborator>(`${this.url}collaborators/${id}`, collaborator);
  }

 
  deleteColaborrator(id: number): Observable<{ success: boolean; message?: string }> {
    return this.http.delete<{ success: boolean; message?: string }>(`${this.url}collaborators/${id}`);
  }
  


}
