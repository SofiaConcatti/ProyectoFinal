import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderFont]',
})
export class AppHeaderFontDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '20px';
  }
}
