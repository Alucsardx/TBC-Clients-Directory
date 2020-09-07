import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Address } from 'src/app/types/types';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {
  transform(value: Address): any {
    if (value) {
      return `${value.country}, ${value.city}, ${value.address}`;
    } else {
      return 'N/A';
    }
  }
}
