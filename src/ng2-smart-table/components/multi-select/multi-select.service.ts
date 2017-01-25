import { Injectable, ElementRef } from '@angular/core';
declare var Selectivity: any;

@Injectable()
export class MultiSelectService {

  simpleSelect(targetDOMElement: ElementRef, disabled: boolean, options: Array<any>, selectedValue: string, multiple: boolean): void {
    let items = this.refactorOptions(options);

    let config = {
      allowClear: true,
      element: targetDOMElement,
      items,
      readonly: disabled,
      value: selectedValue,
      placeholder: 'Select...'
    }

    var selectivity = (multiple) ? new Selectivity.Inputs.Multiple(config) : new Selectivity.Inputs.Single(config);
  }

  refactorOptions(options: Array<any>): Array<any> {
    // convert [{value, title}] to [{id, text}]
    return options.map(option => { return {id: option.value, text: option.title} });
  }
}