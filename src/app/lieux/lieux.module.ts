import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LieuxRoutingModule } from './lieux.routing';
import { LieuxComponent } from './components/lieux/lieux.component';
import { FormulaireLieuComponent } from './components/formulaire-lieu/formulaire-lieu.component';
import { NouveauLieuComponent } from './components/nouveau-lieu/nouveau-lieu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LieuxRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    LieuxComponent,
    FormulaireLieuComponent,
    NouveauLieuComponent
  ]
})
export class LieuxModule { }
