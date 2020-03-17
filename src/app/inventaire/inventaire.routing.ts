import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventaireComponent } from './components/inventaire/inventaire.component';
import { NouvelArticleComponent } from './components/nouvel-article/nouvel-article.component';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';

const routes: Routes = [
  { path: "", component: InventaireComponent, pathMatch: "full" },
  { path: "creer-article", component: NouvelArticleComponent },
  { path: "modifier-article/:id", component: ModifierArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventaireRoutingModule { }
