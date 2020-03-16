import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Lieu } from '../../lieux/model/lieu.model';
import { LieuService } from '../../services/lieu.service';
import { Article } from '../../model/article.model';
import { InventaireService } from '../../services/inventaire.service';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Unite } from '../../model/unite.model';
import { UniteService } from '../../services/unite.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styles: []
})
export class NouvelArticleComponent {

  lieux$: Observable<Lieu[]>;
  unites$: Observable<Unite[]>;

  constructor(
    lieuService: LieuService,
    uniteService: UniteService,
    private inventaireService: InventaireService,
    private _location : Location
  ) {
    this.lieux$ = lieuService.getTous();
    this.unites$ = uniteService.getTous();
  }

  submit(article: Article) {

    let uuid = UUID.UUID();

    let entity = Object.assign(
      new Article(),
      article,
      { dateCreation: new Date(), id:uuid, _id: "article/" + uuid }
    );

    this.inventaireService.add(entity).subscribe(
      () => {
        this._location.back();
      },
      error => {
        console.error(error);
        window.alert("Une erreur est survenue lors de l'enregistrement.");
      });
  }
}
