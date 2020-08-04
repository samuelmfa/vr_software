import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
