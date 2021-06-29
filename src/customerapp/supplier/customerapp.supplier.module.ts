import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierRouting } from '../routing/customerapp-supplierrouting.module';


import { SupplierComponent } from './customerapp.suppliercomponent';


@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    SupplierRouting,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
