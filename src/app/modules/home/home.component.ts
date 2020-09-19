import { Component, OnInit } from '@angular/core';
import { CursoAluno } from '../../core/models/curso-aluno';
import { HomeService } from './home.service';
import { CursosService } from '../cursos/cursos.service';
import { AlunosService } from '../alunos/alunos.service';
import { ToastrService } from 'ngx-toastr';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listaCursosAluno: [] = [];
  public listaCursos: [] = [];
  public listaAlunos: [] = [];
  public formulario: FormGroup;
  public spinner = false;
  public loading = false;

  constructor(
    public cursosAlunoService: HomeService,
    public cursoService: CursosService,
    public alunoService: AlunosService,
    public fb: FormBuilder,
    // protected toaster: ToastrService
  ) {

    this.formulario = this.fb.group({
      codigo: [''],
      codigo_aluno: ['', [Validators.required]],
      codigo_curso: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.buscarInformacoes();
    setTimeout(() => {
      this.loading = false;
    }, 1000);

  }

  public buscarInformacoes(): void {
    this.listarCursosAlunos();
    this.listarAlunos();
    this.listarCursos();
    this.loading = true;
  }

  public listarCursosAlunos(): void {
    this.cursosAlunoService.listarAlunosCursos().subscribe((resp: any) => {
      this.listaCursosAluno = resp;
      // console.log(this.listaCursosAluno);
    });
  }

  public listarCursos(): void {
    this.cursoService.listarCursos().subscribe((resp: any) => {
      this.listaCursos = resp;
    });
  }

  public listarAlunos(): void {
    this.alunoService.listarAlunos().subscribe((resp: any) => {
      this.listaAlunos = resp;
    });
  }

  public limpaForm(): void {
    this.formulario.reset();
  }

  public novaMatricula(): void {
    this.spinner = true;
    const aluno = this.formulario.controls.codigo_aluno.value;
    const curso = this.formulario.controls.codigo_curso.value;
    // tslint:disable-next-line: max-line-length
    const busca = this.listaCursosAluno.find((element: any) => {
      return element.codigo_curso === parseInt(curso) && element.codigo_aluno === parseInt(aluno);
    });
    if (busca) {
      this.toaster.error('Aluno(a) já está matriculado(a) neste curso!');
      this.formulario.reset();
      this.listarCursosAlunos();
      this.spinner = false;
    } else {
      this.cursosAlunoService.matricularNovoAluno(this.formulario.value).subscribe((resp: any) => {
        if (resp) {
          this.toaster.success('Aluno Matriculado com Sucesso!');
          this.formulario.reset();
          this.listarCursosAlunos();
          this.spinner = false;
        } else {
          this.toaster.error('Erro ao Matricular o Aluno!');
          this.spinner = true;
        }
      });
    }




  }
  public cancelarMatricula(id): void {
    this.spinner = true;
    this.cursosAlunoService.cancelarMatricula(id).subscribe((resp: any) => {
      if (resp) {
        this.toaster.success('Aluno Removido do Curso!');
        this.formulario.reset();
        this.listarCursosAlunos();
        this.spinner = false;
      } else {
        this.toaster.error('Erro Remover o Aluno!');
        this.spinner = true;

      }
    });

  }

  public captureScreen(): void {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('print.pdf'); // Generated PDF
    });
  }

}
