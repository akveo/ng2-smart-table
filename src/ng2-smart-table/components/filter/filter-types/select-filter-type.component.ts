import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DefaultFilter } from './default-filter';

@Component({
  selector: 'select-filter-type',
  template: `
    <select [ngClass]="inputClass"
            class="form-control"
            (change)="valueChange.emit($event.target.value)">
        <option value="">Select...</option>
        <option *ngFor="let option of column.getConfig()?.list" [value]="option.value">
            {{ option.title }}
        </option>
    </select>
    `
})
export class SelectFilterTypeComponent extends DefaultFilter {
}
