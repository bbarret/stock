import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators/map';
import { BaseService } from '../../shared/services/base.service';
import { ArticleDto } from '../dto/article.dto';
import { Peremption } from '../dto/peremption';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class InventaireService {
  constructor(private base: BaseService) {
  }

  public getProchesLimite(): Observable<ArticleDto[]> {
    return this.base.allDocs(Article, "article/").pipe(
      map(articles => articles.map(art =>
        Object.assign(new ArticleDto(), {
          id: art.id,
          nom: art.nom,
          dateAjout: art.dateAjout,
          dateLimite: new Date(art.dateLimite),
          peremption: this.calculePeremption(new Date(art.dateLimite))
        }))),
      map(articles => articles.sort((a, b) => b.peremption - a.peremption))
    );
  }

  calculePeremption(limite: Date): Peremption {
    let maintenant = new Date();
    if (limite < maintenant) {
      return Peremption.depassee;
    } else if (limite.getTime() < maintenant.getTime() + 3 * 24 * 60 * 60 * 1000) {
      return Peremption.tresProche;
    } else if (limite.getTime() < maintenant.getTime() + 14 * 24 * 60 * 60 * 1000) {
      return Peremption.proche;
    } else {
      return Peremption.ok;
    }

  }

  public add(article: Article): Observable<Boolean> {
    return this.base.add(article);
  }

  public remove(id: string): Observable<Boolean> {
    return from(
      this.base.db.get("article/"+id).then(doc => this.base.db.remove(doc._id, doc._rev))
    ).pipe(
      map(response => response.ok)
    );
  }

  public get(id: string): Observable<Article> {
    if (id) {
      console.info(id);
      return from(this.base.db.get("article/" + id));
    } else {
      throw new Error("id null");
    }
  }

  update(article: Article): Observable<boolean> {
    return from(this.base.db.get("article/" + article.id))
      .pipe(
        map(entity => Object.assign(entity, article)),
        switchMap(entity => from(this.base.db.put(entity))),
        map(response => response.ok)
      );
  }

  getTous():  Observable<ArticleDto[]> {
    return this.base.allDocs(Article, "article/").pipe(
      map(articles => articles.map(art =>
        Object.assign(new ArticleDto(), {
          id: art.id,
          nom: art.nom,
          dateAjout: art.dateAjout,
          dateLimite: new Date(art.dateLimite),
          peremption: this.calculePeremption(new Date(art.dateLimite))
        }))),
      map(articles => articles.sort((a, b) => a.nom.localeCompare(b.nom))),
    );
  }
}
