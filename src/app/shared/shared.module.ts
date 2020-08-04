import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    PrimeNgModule,
    NgxLoadingModule,
    ToastrModule
  ]
})
export class SharedModule { }
