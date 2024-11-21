import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yes',
  standalone: true
})
export class YesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
