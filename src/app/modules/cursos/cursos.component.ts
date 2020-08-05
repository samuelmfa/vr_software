import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Curso } from '../../core/models/curso';
import { CursosService } from './cursos.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public loading = false;
  public cursos$: [] = [];
  public curso: Curso;
  public spinner = false;

  public formulario: FormGroup;

  constructor(
    private cursoService: CursosService,
    protected fb: FormBuilder,
    protected toaster: ToastrService
  ) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      descricao: ['', [Validators.required]],
      ementa: ['', [Validators.required]]
    });

    this.buscarCursos();

  }

  gravarNovoCurso(): void {
    this.loading = true;
    this.spinner = true;
    this.curso = Object.assign({}, this.curso, this.formulario.value);

    this.cursoService.cadastrarCurso(this.curso).subscribe((resp: any) => {

      this.toaster.success('Novo Curso Cadastrado Com Sucesso!');
      this.formulario.reset();
      this.buscarCursos();
      setTimeout(() => {
        this.loading = false;
        this.spinner = false;
      }, 1000);

    }, (erro) => {
      this.toaster.error('Erro ao Cadastrar novo Curso!');
      this.loading = false;
      this.spinner = false;
    });
  }

  buscarCursos(): void {
    this.cursoService.listarCursos().subscribe((resp: any) => {
      this.loading = true;
      this.cursos$ = resp;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
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
