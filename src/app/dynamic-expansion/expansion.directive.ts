import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[expansionDirective]',
})
export class ExpansionDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
