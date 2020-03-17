import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { InventaireService } from './inventaire/services/inventaire.service';

import { registerLocaleData, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ReactiveFormsModule } from '@angular/forms';
import { LieuService } from './lieux/services/lieu.service';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { UniteService } from './inventaire/services/unite.service';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BaseService } from './shared/services/base.service';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    InventaireService,
    LieuService,
    UniteService,
    BaseService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
