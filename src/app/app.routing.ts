import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { NouvelArticleComponent } from './components/nouvel-article/nouvel-article.component';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';
import { InventaireComponent } from './components/inventaire/inventaire.component';
const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "overview", component: OverviewComponent },
  { path: "overview/creer-article", component: NouvelArticleComponent },
  { path: "overview/modifier-article/:id", component: ModifierArticleComponent },
  { path: "articles", component: InventaireComponent },
  { path: "articles/creer-article", component: NouvelArticleComponent },
  { path: "articles/modifier-article/:id", component: ModifierArticleComponent },
  { path: "lieux", loadChildren: './lieux/lieux.module#LieuxModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
