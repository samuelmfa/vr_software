import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'cursos', loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule) },
  { path: 'detalhe-curso/:id', loadChildren: () => import('./modules/detalhe-curso/detalhe-curso.module').then(m => m.DetalheCursoModule) },
  { path: 'alunos', loadChildren: () => import('./modules/alunos/alunos.module').then(m => m.AlunosModule) },
  { path: '**', loadChildren: () => import('./modules/page404/page404.module').then(m => m.Page404Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
