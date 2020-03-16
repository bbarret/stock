import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Lieu } from '../model/lieu.model';
import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class LieuService {
  constructor(private base: BaseService) {
  }

  public getTous(): Observable<Lieu[]> {
    return this.base.allDocs(Lieu, "lieu/");
  }

  public add(lieu: Lieu): Observable<Boolean> {
    return this.base.add(lieu);
  }

}
