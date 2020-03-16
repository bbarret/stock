import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../components/overview/overview.component';
import { NouvelArticleComponent } from '../components/nouvel-article/nouvel-article.component';
import { LieuxComponent } from '../components/lieux/lieux.component';
import { NouveauLieuComponent } from '../components/nouveau-lieu/nouveau-lieu.component';
import { ModifierArticleComponent } from '../components/modifier-article/modifier-article.component';
import { InventaireComponent } from '../components/inventaire/inventaire.component';
const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "overview", component: OverviewComponent },
  { path: "overview/creer-article", component: NouvelArticleComponent },
  { path: "overview/modifier-article/:id", component: ModifierArticleComponent },
  { path: "articles", component: InventaireComponent },
  { path: "articles/creer-article", component: NouvelArticleComponent },
  { path: "articles/modifier-article/:id", component: ModifierArticleComponent },
  { path: "lieux", component: LieuxComponent },
  { path: "lieux/creer-lieu", component: NouveauLieuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
