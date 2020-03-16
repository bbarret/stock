import { Component, OnInit } from '@angular/core';
import { InventaireService } from '../../services/inventaire.service';
import { ArticleDto } from 'src/app/dto/article.dto';
import { Observable } from 'rxjs';
import { Peremption } from 'src/app/dto/peremption';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styles: []
})
export class InventaireComponent {
  tous$: Observable<ArticleDto[]>;

  constructor(
    private inventaireService: InventaireService,
    private router:Router,
    private activatedRoute: ActivatedRoute) {
    this.tous$ = inventaireService.getTous();
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
