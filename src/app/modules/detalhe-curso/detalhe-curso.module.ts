import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheCursoComponent } from './detalhe-curso.component';
import { DetalheCursoService } from './detalhe-curso.service';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { CursosService } from '../cursos/cursos.service';
import { HomeService } from '../home/home.service';

import { DetalheCursoRoutingModule } from './detalhe-curso-routing.module';

@NgModule({
  declarations: [DetalheCursoComponent],
  imports: [
    CommonModule,
    DetalheCursoRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [DetalheCursoService, CursosService, HomeService]
})
export class DetalheCursoModule { }
