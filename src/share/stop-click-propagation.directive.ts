import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopClickPropagation]'
})
export class StopClickPropagationDirective {

  @HostListener('click', ['$event'])
  public stopClickPropogration(event: Event): void 
  {
    event.stopPropagation();
  }
}
