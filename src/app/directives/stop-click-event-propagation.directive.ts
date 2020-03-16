import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[stop-click-event-propagation]"
})
export class StopClickEventPropagationDirective {
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
