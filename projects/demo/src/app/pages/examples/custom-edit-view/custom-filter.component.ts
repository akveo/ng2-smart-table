import {Component} from '@angular/core';

import {DefaultFilter} from 'angular2-smart-table';

@Component({
    template: `
    <input
      #textfield
      [ngClass]="inputClass"
      [placeholder]="column.title"
      type="number"
      [value]="query"
      (change)="onValueChanged(textfield.value)"
      (keyup)="onValueChanged(textfield.value)"
    >
  `,
    standalone: false
})
export class CustomFilterComponent extends DefaultFilter {
onValueChanged(arg0: string) {
throw new Error('Method not implemented.');
}
}
