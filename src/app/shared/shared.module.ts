import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopClickEventPropagationDirective } from './directives/stop-click-event-propagation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StopClickEventPropagationDirective
  ]
})
export class SharedModule { }
