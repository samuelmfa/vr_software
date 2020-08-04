import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/models/aluno';
import { AlunosService } from './alunos.service';
import { ToastrService } from 'ngx-toastr';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  public alunos$: [] = [];
  public aluno: Aluno;

  public spinner = false;

  public formulario: FormGroup;

  constructor(
    public alunosService: AlunosService,
    public fb: FormBuilder,
    protected toaster: ToastrService
  ) {
    this.listarAlunos();
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      codigo: [''],
      nome: ['', [Validators.required]]
    });
  }

  public limpaForm(): void {
    this.formulario.reset();
  }

  public listarAlunos(): void {
    this.alunosService.listarAlunos().subscribe((resp: any) => {
      this.alunos$ = resp;
    });
  }

  public buscarAluno(aluno): void {
    this.formulario.setValue({
      codigo: aluno.codigo,
      nome: aluno.nome
    });
  }

  public excluirAluno(aluno): void {
    this.alunosService.excluirAluno(aluno).subscribe((resp: any) => {
      if (resp) {
        this.toaster.success('Aluno Excluido com Sucesso!');
        this.listarAlunos();
      } else {
        this.toaster.error('Erro ao Excluir Aluno!');

      }
    });

  }

  public gravarNovoAluno(): void {
    this.spinner = true;
    this.alunosService.cadastrarAluno(this.formulario.value).subscribe((resp: any) => {
      if (resp) {
        this.toaster.success('Aluno Cadastrado com Sucesso!');
        this.formulario.reset();
        this.listarAlunos();
        this.spinner = false;
      } else {
        this.toaster.error('Erro ao Cadastrar Aluno!');
        this.spinner = false;
      }
    });
  }

  public editarAluno(): void {
    this.spinner = true;
    this.alunosService.editarAluno(this.formulario.value).subscribe((resp: any) => {
      if (resp) {
        this.toaster.success('Aluno Editado com Sucesso!');
        this.formulario.reset();
        location.href = 'alunos';
      } else {
        this.toaster.error('Erro ao Editar Aluno!');
        this.spinner = false;
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
