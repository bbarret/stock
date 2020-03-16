import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators/map';

@Injectable()
export class BaseService {
  private _db: PouchDB.Database<{}>;

  constructor() {
    this._db = new PouchDB('stock');
  }

  get db(){
    return this._db;
  }


  public allDocs<T>(c: {new(): T; }, prefixe:string): Observable<T[]> {
    return from(
      this._db.allDocs({
        include_docs: true,
        startkey: prefixe,
        endkey: prefixe+"\ufff0"
  
      })
    ).pipe(
      map(result => result.rows),
      map(rows => rows.map(r => Object.assign(new c(), r.doc)))
    );
  }


  public add<T>(entity: T): Observable<Boolean> {
    return from(
      this._db.put(entity)
    ).pipe(
      map(response => response.ok)
    );
  }

  upgrade(): void {
    this._db.get('metadonnee/version').then(function(doc) {
      console.info(doc);
    }).catch(function (err) {
      console.log(err);
    });


  }

}
