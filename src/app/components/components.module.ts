import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardCursosComponent } from './card-cursos/card-cursos.component';

@NgModule({
  declarations: [CardCursosComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CardCursosComponent]
})
export class ComponentsModule { }
