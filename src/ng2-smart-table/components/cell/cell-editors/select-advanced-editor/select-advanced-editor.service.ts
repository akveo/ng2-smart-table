import { Injectable, ElementRef } from '@angular/core';
import * as Selectivity from 'selectivity';
import 'selectivity/dropdown';
import 'selectivity/templates';
import 'selectivity/inputs/single';
import 'selectivity/inputs/multiple';
import 'selectivity/plugins/keyboard';

@Injectable()
export class SelectAdvancedEditorService {

  simpleSelect(
    targetDOMElement: ElementRef,
    disabled: boolean,
    options: Array<any>,
    selectedValue: string | Array<string>,
    multiple: boolean): void {
      const items = this.refactorOptions(options);

      // if multiple select is possible, selectedValue must be an array of IDs, if not, convert to array
      if (multiple && typeof(selectedValue) === 'string')
        selectedValue = [selectedValue];

      const config = {
        allowClear: true,
        element: targetDOMElement,
        items,
        readonly: disabled,
        value: selectedValue,
        placeholder: 'Select...'
      };

      const selectivity = (multiple) ? new Selectivity.Inputs.Multiple(config) : new Selectivity.Inputs.Single(config);
  }

  refactorOptions(options: Array<any>): Array<any> {
    // convert [{value, title}] to [{id, text}]
    return options.map((option) => { return { id: option.value, text: option.title } });
  }
}
