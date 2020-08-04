import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule,
    TabsModule,
    ModalModule,
    CollapseModule,

  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    ModalModule,
    CollapseModule,
  ],
})
export class NgxBootstrapModule { }
