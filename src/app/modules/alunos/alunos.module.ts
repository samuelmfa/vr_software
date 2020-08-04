import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { SharedModule  } from '../../shared/shared.module';

import { AlunosRoutingModule } from './alunos-routing.module';


@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    SharedModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
