import { Component, OnInit } from '@angular/core';
import { LieuService } from '../../services/lieu.service';
import { Observable } from 'rxjs/Observable';
import { Lieu } from '../../model/lieu.model';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.component.html',
  styles: []
})
export class LieuxComponent {

  lieux$: Observable<Lieu[]>;

  constructor(lieuService: LieuService) {
    this.lieux$ = lieuService.getTous();
  }
}
