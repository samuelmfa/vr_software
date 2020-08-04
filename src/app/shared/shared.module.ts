import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    PrimeNgModule,
  ]
})
export class SharedModule { }
