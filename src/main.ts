import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  // pourquoi d'un coup ca marche plus si on met pas ca? sacrebleu!
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register('ngsw-worker.js',{scope:"./"});
    }
  })
  .catch(err => console.log(err));
