import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ApiService } from '../services/api.service';

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
  ], providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiService,
    multi: true
  }]
})
export class SharedModule { }
