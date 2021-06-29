import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {  MainAppRouting } from '../routing/customerapp-mainrouting.module';
import { HomeComponent } from './customerapp.homecomponent';
import { MasterPageComponent } from './customerapp.masterpage.component';

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    MainAppRouting,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
