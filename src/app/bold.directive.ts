import { Directive,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.fontWeight = 'bold';
   }

}
