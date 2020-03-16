import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RoutingModule } from './app.routing';
import { InventaireService } from './services/inventaire.service';

import { registerLocaleData, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormulaireArticleComponent } from './components/formulaire-article/formulaire-article.component';
import { NouvelArticleComponent } from './components/nouvel-article/nouvel-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseService } from './services/base.service';
import { LieuService } from './services/lieu.service';
import { LieuxComponent } from './lieux/components/lieux/lieux.component';
import { FormulaireLieuComponent } from './lieux/components/formulaire-lieu/formulaire-lieu.component';
import { NouveauLieuComponent } from './lieux/components/nouveau-lieu/nouveau-lieu.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { UniteService } from './services/unite.service';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';
import { StopClickEventPropagationDirective } from './directives/stop-click-event-propagation.directive';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InventaireComponent } from './components/inventaire/inventaire.component';
import { ListeArticlesComponent } from './components/liste-articles/liste-articles.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FormulaireArticleComponent,
    NouvelArticleComponent,
    ModifierArticleComponent,
    StopClickEventPropagationDirective,
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
