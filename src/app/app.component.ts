import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Observable, interval } from 'rxjs';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  updateAvailable: boolean =false;

  constructor(private updates: SwUpdate, base:BaseService) {
    if (updates.isEnabled) {
      updates.available.subscribe(e=>{
        console.info("update!");
        this.updateAvailable = true;
      });

      updates.activated.subscribe(event => {
        console.log("Mise à jour de l'application");
        base.upgrade();
      });

      interval(10 * 1000).subscribe(() => updates.checkForUpdate());
    } else {
      console.info("désactivé");
    }
  }

  update() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }

}
