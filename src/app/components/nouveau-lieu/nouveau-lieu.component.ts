import { Component, OnInit } from '@angular/core';
import { Lieu } from '../../model/lieu.model';
import { UUID } from 'angular2-uuid';
import { LieuService } from '../../services/lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-lieu',
  templateUrl: './nouveau-lieu.component.html',
  styles: []
})
export class NouveauLieuComponent {

  constructor(private lieuService: LieuService, private router:Router) {

  }

  submit(lieu: Lieu) {
    let entity = Object.assign(
      new Lieu(),
      lieu,
      { dateCreation: new Date(), _id: "lieu/" + UUID.UUID() }
    );

    this.lieuService.add(entity).subscribe(
      () => {
        this.router.navigate(["/lieux"]);
      },
      error => {
        console.error(error);
        window.alert("Une erreur est survenue lors de l'enregistrement.");
      });
  }

}
