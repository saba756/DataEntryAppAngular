import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';;
import { CustomerRouting } from '../routing/customerapp-customerrouting.module';
import { GridComponent } from '../utility/customerapp.gridcomponent';
import {  HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { CustomerComponent } from './customer.component';
import { MyInterceptor } from '../utility/utility.httpinterceptor';


@NgModule({
  declarations: [
    CustomerComponent,GridComponent
  ],
  imports: [
    CustomerRouting,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    GridComponent
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor ,
    multi:true}],
  bootstrap: [CustomerComponent]
})
export class CustomerAppModule { }
