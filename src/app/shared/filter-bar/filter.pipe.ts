import { Pipe, PipeTransform } from '@angular/core';
import { FilterTypes } from 'src/app/types/types';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: string): any {
    if (value) {
      return FilterTypes[value];
    }
  }
}
