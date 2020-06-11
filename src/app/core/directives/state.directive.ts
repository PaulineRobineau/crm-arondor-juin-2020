import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { Order } from '../models/order';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') classPropertyId: string;
  constructor() {
   }

   ngOnChanges() {
    this.classPropertyId = this.formatClass(this.appState);
   }

   private formatClass(state: string):string {
    return `state-${state.replace(/ /g, '').toLowerCase()}`;
   }


}
