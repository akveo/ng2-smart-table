import { Component, OnInit } from '@angular/core';

import { DefaultFilter } from './default-filter';
import { Column } from '../../../lib/data-set/column';

@Component({
  selector: 'select-filter',
  template: `
    <select #filterEl [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `
})
export class SelectFilterComponent extends DefaultFilter implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.setupFilter('change');
  }
}
