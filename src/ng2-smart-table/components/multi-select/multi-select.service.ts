import { Injectable, ElementRef } from '@angular/core';
declare var Selectivity: any;

@Injectable()
export class MultiSelectService {

  single(targetDOMElement: ElementRef, disabled: boolean, options: Array<any>, selectedValue: string): void {
    let items = this.refactorOptions(options);

    var selectivity = new Selectivity.Inputs.Single({
      allowClear: true,
      element: targetDOMElement,
      items,
      readonly: disabled,
      value: selectedValue,
      placeholder: 'Select...'
    });
  }

  refactorOptions(options: Array<any>): Array<any> {
    // convert [{value, title}] to [{id, text}]
    return options.map(option => { return { id: option.value, text: option.title } });
  }
}