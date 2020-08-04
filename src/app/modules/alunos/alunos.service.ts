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
    return this.http.get(`${this.apiUrl}/alunos`, this.httpOptions);
  }

  public buscarAluno(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/alunos/${id}`, this.httpOptions);
  }

  public cadastrarAluno(aluno): Observable<any> {
    const param = { ...aluno };
    return this.http.post(`${this.apiUrl}/alunos`, param, this.httpOptions);
  }
  public editarAluno(aluno): Observable<any> {
    const param = { ...aluno };
    return this.http.put(`${this.apiUrl}/alunos/${aluno.codigo}`, param, this.httpOptions);
  }
  public excluirAluno(aluno): Observable<any> {
    return this.http.delete(`${this.apiUrl}/alunos/${aluno.codigo}`, this.httpOptions);
  }




}
