import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Injectable()
export class HomeService extends ApiService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public listarAlunosCursos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos-alunos`, this.httpOptions);
  }

  public listarAlunosMatriculadosCurso(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos-alunos/alunos/${id}`, this.httpOptions);
  }

  public matricularNovoAluno(matricula): Observable<any> {
    const param = { ...matricula };
    return this.http.post(`${this.apiUrl}/cursos-alunos`, param, this.httpOptions);
  }

  public cancelarMatricula(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cursos-alunos/${id}`, this.httpOptions);
  }

}
