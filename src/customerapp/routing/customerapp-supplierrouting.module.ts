import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SupplierComponent } from '../supplier/customerapp.suppliercomponent';

export const routes = [
  { path: 'Add', component: SupplierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRouting { }
