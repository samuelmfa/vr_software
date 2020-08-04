import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { CursosService } from '../cursos/cursos.service';
import { AlunosService } from '../alunos/alunos.service';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [HomeService, CursosService, AlunosService]
})
export class HomeModule { }
