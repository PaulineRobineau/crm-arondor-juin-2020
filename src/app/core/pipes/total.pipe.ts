import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, ...args: any[]): number {
    if (value){
      if (args.length > 0){
        // Return total TTC
        return (value.tjmHt * value.nbJours) * (1 + value.tva / 100);
      }
      // Return total HT
      return value.tjmHt * value.nbJours;
    }
    return null;
  }

}
