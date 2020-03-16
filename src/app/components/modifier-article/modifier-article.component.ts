import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article.model';
import { Observable } from 'rxjs/Observable';
import { InventaireService } from '../../services/inventaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { UniteService } from '../../services/unite.service';
import { Unite } from '../../model/unite.model';
import { LieuService } from '../../services/lieu.service';
import { Lieu } from '../../lieux/model/lieu.model';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styles: []
})
export class ModifierArticleComponent {

  article$: Observable<Article>;
  unites$: Observable<Unite[]>;
  lieux$: Observable<Lieu[]>;

  constructor(
    private inventaireService: InventaireService,
    private router: Router,
    route: ActivatedRoute,
    uniteService: UniteService,
    lieuService: LieuService) {

    this.lieux$ = lieuService.getTous();
    this.unites$ = uniteService.getTous();
    this.article$ = route.paramMap.pipe(
      map(paramMap => paramMap.get("id")),
      switchMap(id => inventaireService.get(id)),
      map(article => { console.info(article); return article; })

    );
  }

  submit(article: Article) {
    this.inventaireService.update(article)
      .subscribe(
        () => this.router.navigate(['..']),
        error => {
          window.alert('Une erreur est survenue lors de l\'enregistrement.');
          console.error(error);
        }
      )
  }

}
