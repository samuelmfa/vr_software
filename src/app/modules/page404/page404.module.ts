import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page404Component } from './page404.component';

import { Page404RoutingModule } from './page404-routing.module';


@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    Page404RoutingModule
  ]
})
export class Page404Module { }
