import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './inventaire/components/overview/overview.component';
import { RoutingModule } from './app.routing';
import { InventaireService } from './inventaire/services/inventaire.service';

import { registerLocaleData, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormulaireArticleComponent } from './inventaire/components/formulaire-article/formulaire-article.component';
import { NouvelArticleComponent } from './inventaire/components/nouvel-article/nouvel-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LieuService } from './lieux/services/lieu.service';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { UniteService } from './inventaire/services/unite.service';
import { ModifierArticleComponent } from './inventaire/components/modifier-article/modifier-article.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InventaireComponent } from './inventaire/components/inventaire/inventaire.component';
import { ListeArticlesComponent } from './inventaire/components/liste-articles/liste-articles.component';
import { BaseService } from './shared/services/base.service';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FormulaireArticleComponent,
    NouvelArticleComponent,
    ModifierArticleComponent,
    InventaireComponent,
    ListeArticlesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
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
