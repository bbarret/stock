import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LieuxComponent } from './components/lieux/lieux.component';
import { NouveauLieuComponent } from './components/nouveau-lieu/nouveau-lieu.component';

const routes: Routes = [
  { path: "", component: LieuxComponent, pathMatch: "full" },
  { path: "creer-lieu", component: NouveauLieuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LieuxRoutingModule { }
