import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  pure: false
})

export class ArrayToStringPipe implements PipeTransform {
  transform(value: any): string {
    // this will need to be updated when non-array Objects will be supported
    return typeof(value) === 'object' ? value.join(', ') : value;
  }
}
