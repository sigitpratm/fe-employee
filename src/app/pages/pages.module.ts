import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    NgxPaginationModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterModule,
  ],
})
export class PagesModule {}
