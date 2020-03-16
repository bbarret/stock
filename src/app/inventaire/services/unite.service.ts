import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs/Observable';
import { Unite } from '../model/unite.model';

@Injectable()
export class UniteService {
  constructor(private base: BaseService) {
  }

  public getTous(): Observable<Unite[]> {
    /*
    return this.base.allDocs(Unite, {
      include_docs: true,
      startkey: "unite/",
      endkey: "unite/\ufff0"
    });
    */

    return new Observable(emitter=>{
      let kg = new Unite();
      kg.libelle = "kg";
      let l = new Unite();
      l.libelle = "l";

      emitter.next([kg, l]);
      emitter.complete();


    });
  }


}
