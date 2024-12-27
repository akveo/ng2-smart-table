import {Component} from '@angular/core';

import {DefaultFilter} from './default-filter';

@Component({
    selector: 'input-filter',
    template: `
    <input
      [ngClass]="inputClass"
      type="text"
      [value]="query"
      (change)="onValueChanged($any($event.target).value)"
      (keyup)="onValueChanged($any($event.target).value)"
      placeholder="{{ column.placeholder || column.title }}"/>
  `,
    standalone: false
})
export class InputFilterComponent extends DefaultFilter {
}
