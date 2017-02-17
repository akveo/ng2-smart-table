import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DefaultFilter } from './default-filter';

@Component({
  selector: 'input-filter-type',
  template: `
    <input (keyup)="onChange($event)"
           [ngClass]="inputClass"
           class="form-control"
           type="text" 
           placeholder="{{ column.title }}" />
    `
})
export class InputFilterTypeComponent extends DefaultFilter {

  onChange(event) {
    // ignore tab event
    if (event.which !== 9) {
      this.valueChange.emit(event.target.value);
    }
  }
}
