import { Component, OnInit } from '@angular/core';
import { InventaireService } from '../../services/inventaire.service';
import { Observable } from 'rxjs/Observable';
import { Article } from '../../model/article.model';
import { ArticleDto } from '../../dto/article.dto';
import { Peremption } from '../../dto/peremption';
import { Router, ActivatedRoute } from '@angular/router';
import { shareReplay } from 'rxjs/operators/shareReplay';
import { LieuService } from 'src/app/services/lieu.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: []
})
export class OverviewComponent implements OnInit {
  articlesLimite$: Observable<ArticleDto[]>;
  lieuxExistants$ : Observable<boolean>;

  constructor(
    private inventaireService: InventaireService,
    lieuService:LieuService,
    private router:Router,
    private activatedRoute: ActivatedRoute) {
      this.lieuxExistants$ = lieuService.getTous().pipe(map(lieux=>lieux.length>0));
  }

  ngOnInit() {
    this.articlesLimite$ = this.inventaireService.getProchesLimite().pipe(shareReplay(1));
  }

  supprimer(id:string) {
    if (window.confirm("Supprimer cet article?")) {
      this.inventaireService.remove(id).subscribe(b => console.info(b));
    }
  }

  modifier(id:string){
    this.router.navigate(["modifier-article",id], {relativeTo: this.activatedRoute});
  }

}
