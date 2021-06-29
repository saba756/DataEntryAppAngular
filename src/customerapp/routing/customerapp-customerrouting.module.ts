import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';

export const routes = [
  { path: 'Add', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRouting { }
