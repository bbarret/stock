import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventaireRoutingModule } from './inventaire.routing';
import { FormulaireArticleComponent } from './components/formulaire-article/formulaire-article.component';
import { NouvelArticleComponent } from './components/nouvel-article/nouvel-article.component';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';
import { InventaireComponent } from './components/inventaire/inventaire.component';
import { ListeArticlesComponent } from './components/liste-articles/liste-articles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

@NgModule({
  imports: [
    InventaireRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
   CommonModule
  ],
  declarations: [
    FormulaireArticleComponent,
    NouvelArticleComponent,
    ModifierArticleComponent,
    InventaireComponent,
    ListeArticlesComponent
  ]
})
export class InventaireModule { }
