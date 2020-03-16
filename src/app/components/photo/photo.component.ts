import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.less']
})
export class PhotoComponent implements OnInit {

  @ViewChild('video') videoElement: any;
  @ViewChild('canvas') canvasElement: any;

  state$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.state$ = from(navigator.mediaDevices.getUserMedia({ video: true }))
      .pipe(
        map(stream => {
          this.videoElement.nativeElement.srcObject = stream;
          this.videoElement.nativeElement.play();
          return "ok";
        }),
        catchError(err=>"error")
      );
  }

  takePicture(): void {
    this.canvasElement.nativeElement.getContext("2d").drawImage(this.videoElement.nativeElement, 0, 0, 300, 300, 0, 0, 300, 300);
    //var img = this.canvasElement.nativeElement.toDataURL("image/png");
    alert("done");
  }

}
