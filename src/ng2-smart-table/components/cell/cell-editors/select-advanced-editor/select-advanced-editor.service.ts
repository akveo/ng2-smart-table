import { Injectable, ElementRef } from '@angular/core';
var Selectivity = require('selectivity');
require('selectivity/dropdown');
require('selectivity/templates');
require('selectivity/inputs/single');
require('selectivity/inputs/multiple');
require('selectivity/inputs/email');
require('selectivity/plugins/ajax');
require('selectivity/plugins/async');
require('selectivity/plugins/submenu');

@Injectable()
export class MultiSelectService {

  simpleSelect(targetDOMElement: ElementRef, disabled: boolean, options: Array<any>, selectedValue: string | Array<string>, multiple: boolean): void {
    let items = this.refactorOptions(options);

    // if multiple select is possible, selectedValue must be an array of IDs, if not, convert to array
    if (multiple && typeof(selectedValue) == 'string')
      selectedValue = [selectedValue];

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