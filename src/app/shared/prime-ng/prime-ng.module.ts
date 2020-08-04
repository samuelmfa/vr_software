import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule,
    SplitButtonModule,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CarouselModule,
    CalendarModule,
    DialogModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    SidebarModule,
    ListboxModule
  ],
   exports: [
    MenubarModule,
    TooltipModule,
    SplitButtonModule,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CarouselModule,
    CalendarModule,
    DialogModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    SidebarModule,
    ListboxModule
   ],
   providers: [
     ConfirmationService,
     MessageService,
   ]
})
export class PrimeNgModule { }
