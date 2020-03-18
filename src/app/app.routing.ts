import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/articles", pathMatch: "full" },
  { path: "articles", loadChildren: './inventaire/inventaire.module#InventaireModule'},
  { path: "lieux", loadChildren: './lieux/lieux.module#LieuxModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
