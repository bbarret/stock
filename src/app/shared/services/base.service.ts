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
    const remoteDb = new PouchDB('http://localhost:5984/stock', { auth: { username: 'bert', password: '1234' } });
    this._db.sync(remoteDb, { live: true, retry: true })
      .on('change', function (change) {
        console.group('change');
        console.dir(change);
        console.groupEnd();
      })
      .on('paused', function (info) {
        console.group('change');
        console.dir(info);
        console.groupEnd();
      })
      .on('error', function (err) {
        console.group('change');
        console.dir(err);
        console.groupEnd();
      })
      .on('paused', function (err) {
        console.group('change');
        console.dir(err);
        console.groupEnd();
      })
      .on('denied', function (err) {
        console.group('change');
        console.dir(err);
        console.groupEnd();
      });

  }

  get db() {
    return this._db;
  }


  public allDocs<T>(c: { new(): T; }, prefixe: string): Observable<T[]> {
    return from(
      this._db.allDocs({
        include_docs: true,
        startkey: prefixe,
        endkey: prefixe + "\ufff0"

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
    this._db.get('metadonnee/version')
      .then(doc => console.info(doc))
      .catch(err => console.log(err));
  }

}
