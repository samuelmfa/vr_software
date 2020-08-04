import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheCursoComponent } from './detalhe-curso.component';

const routes: Routes = [
  { path: '', component: DetalheCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalheCursoRoutingModule { }
