import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Lieu } from '../../model/lieu.model';

@Component({
  selector: 'app-formulaire-lieu',
  templateUrl: './formulaire-lieu.component.html',
  styles: []
})
export class FormulaireLieuComponent  {

  formulaire = this.fb.group({
    libelle: ['', Validators.required]
  });

  @Output()
  submitted:EventEmitter<Lieu> = new EventEmitter<Lieu>();

  constructor(private fb: FormBuilder) {
  }


  @Input()
  set lieu(value:Lieu) {
    if (value) {
      this.formulaire.patchValue(value);
    }
  }


  submit(){
    this.submitted.emit(this.formulaire.value);
  }


}
