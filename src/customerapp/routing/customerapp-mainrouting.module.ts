import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/customerapp.homecomponent';

export const MainRoutes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Customer',
    loadChildren: () => import('../customer/customerapp.module').then(m => m.CustomerAppModule)
  },
  {
    path: 'Supplier',
    loadChildren: () => import('../supplier/customerapp.supplier.module').then(m => m.SupplierModule)
  },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(MainRoutes)],
  exports: [RouterModule]
})
export class MainAppRouting { }
