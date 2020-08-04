import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CursosService extends ApiService{

  constructor(protected http: HttpClient) {
    super(http);
   }

   public listarCursos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos`, this.httpOptions);
  }

  public buscarCurso(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos/${id}`, this.httpOptions);
  }

  public cadastrarCurso(curso): Observable<any> {
    const param = { ...curso };
    return this.http.post(`${this.apiUrl}/cursos`, param, this.httpOptions);
  }
  public editarCurso(curso): Observable<any> {
    const param = { ...curso };
    return this.http.put(`${this.apiUrl}/cursos/${curso.codigo}`, param, this.httpOptions);
  }
  public excluirCurso(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cursos/${id}`, this.httpOptions);
  }


}
