import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArticleDto } from 'src/app/inventaire/dto/article.dto';
import { Peremption } from 'src/app/inventaire/dto/peremption';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html'
})
export class ListeArticlesComponent {
  @Input()
  articles : ArticleDto[];

  @Output()
  supprimer : EventEmitter<string> = new EventEmitter<string>();
  @Output()
  ouvrir : EventEmitter<string> = new EventEmitter<string>();
    
  classe(peremption: Peremption): string {
    if (peremption == Peremption.depassee) {
      return "table-dark";
    } else if (peremption == Peremption.tresProche) {
      return "table-danger";
    } else if (peremption == Peremption.proche) {
      return "table-warning";
    } else {
      return null;
    }
  }

  onClickBoutonSupprimer(article:ArticleDto){
    this.supprimer.emit(article.id);
  }
  onClickLigne(article:ArticleDto){
    this.ouvrir.emit(article.id);
  }


}
