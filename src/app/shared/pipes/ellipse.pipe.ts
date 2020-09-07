import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'ellipse'
})
export class EllipsePipe implements PipeTransform {
  transform(value: string, length = 10): any {
    let resultString = value;
    if (resultString.length > length) {
      resultString = resultString.substr(0, length);
      resultString += '...';
    }
    return resultString;
  }
}

@NgModule({
  declarations: [EllipsePipe],
  exports: [EllipsePipe]
})
export class EllipsePipeModule {}
