import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Article } from '../../model/article.model';
import { Lieu } from '../../model/lieu.model';
import { Unite } from '../../model/unite.model';

@Component({
  selector: 'app-formulaire-article',
  templateUrl: './formulaire-article.component.html',
  styles: []
})
export class FormulaireArticleComponent  {

  formulaire = this.fb.group({
    id:'',
    dateLimite: ['', Validators.required],
    nom: ['', Validators.required],
    lieu:['', Validators.required],
    unites:['', Validators.required],
    quantiteUnitaire:new FormGroup({
      valeur:new FormControl(''),
      unite:new FormControl('')
    })
  });

  @Input()
  lieux: Lieu[];

  @Input()
  unites: Unite[];

  @Output()
  submitted:EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private fb: FormBuilder) {  }


  @Input()
  set article(value: Article) {
    if (value) {
      this.formulaire.patchValue(value);
    }
  }


  submit(){
    this.submitted.emit(this.formulaire.value);
  }

}
