import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosService extends ApiService {

  constructor(protected http: HttpClient) {
    super(http);
   }

   public listarAlunos(): Observable<any> {
    return this.http.post(`${this.apiUrl}/alunos`, this.httpOptions);
  }




}
