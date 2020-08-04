import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos/cursos.service';
import { Curso } from 'src/app/core/models/curso';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.scss']
})
export class DetalheCursoComponent implements OnInit {
  public id: string;
  public curso: Curso;
  public loading = false;
  public formulario: FormGroup;
  public spinner = false;

  constructor(
    private cursoService: CursosService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      if (this.id !== undefined) {
        console.log(this.id);
      }
    });
  }

  ngOnInit(): void {
    this.buscarCurso(this.id);
    this.formulario = this.fb.group({
      codigo: [''],
      descricao: ['', [Validators.required]],
      ementa: ['', [Validators.required]]
    });


  }

  buscarCurso(id): void {
    this.loading = true;
    this.cursoService.buscarCurso(id).subscribe((curso: any) => {
      this.curso = curso;
      this.formulario.setValue({
        codigo: this.curso.codigo,
        descricao: this.curso.descricao,
        ementa: this.curso.ementa
      });
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

  public editarCurso(): void {
    this.spinner = true;
    this.cursoService.editarCurso(this.formulario.value).subscribe((resp: any) => {
      if (resp) {
        this.toastr.success('Curso Editado com sucesso!');
        setTimeout(() => {
         location.href = '/cursos';
        }, 1000);
      } else {
        this.toastr.error('Erro ao Excluir Curso');
        this.spinner = false;
      }
    });
  }

  public excluirCurso(id): void {
    const resposta = confirm('Deseja Excluir este Curso!');
    if (resposta) {
      this.cursoService.excluirCurso(id).subscribe((resp: any) => {
        if (resp) {
          this.toastr.success('Excluido com sucesso!');
          setTimeout(() => {
            this.router.navigate(['/cursos']);
          }, 1000);
        } else {
          this.toastr.error('Erro ao Excluir Curso');
        }
      });
    }
  }

}
