import { Customer } from './../../Lab 2/CustomerApplication/src/CustomerApp/CustomerApp.model';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { MainModule } from './customerapp/home/customerapp.home.mainmodule';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));
