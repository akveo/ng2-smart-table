import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})

export class ArrayToStringPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    // this will need to be updated when non-array Objects will be supported
    return typeof(value) === 'Object' ? value.join(', ') : value;
  }
}
