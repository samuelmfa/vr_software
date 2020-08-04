import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Injectable()
export class HomeService extends ApiService {

  constructor(protected http: HttpClient) {
    super(http);
   }

   public listarAlunos(): Observable<any> {
    return this.http.post(`${this.apiUrl}/alunos`, this.httpOptions);
  }
}
