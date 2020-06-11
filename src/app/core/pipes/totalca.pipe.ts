import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'totalca'
})
export class TotalcaPipe implements PipeTransform {

  transform(value: Client, ...args: any[]): number {
    if (value){
      return (value.ca * (1 + value.tva / 100));
    }
    return null;
  }

}
