import {Component, OnDestroy, OnInit} from '@angular/core';

import {DefaultFilter} from './default-filter';
import {FilterSettings, ListFilterSettings} from "../../../lib/settings";

@Component({
    selector: 'select-filter',
    template: `
    <select [ngClass]="inputClass"
            [value]="query"
            (change)="onValueChanged($any($event.target).value)">
        <option value="">{{ config.selectText ?? 'Select...' }}</option>
        <option *ngFor="let option of config.list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
    standalone: false
})
export class SelectFilterComponent extends DefaultFilter implements OnInit, OnDestroy {

  config!: ListFilterSettings;

  ngOnInit() {
    this.config = (this.column.filter as FilterSettings).config as ListFilterSettings;
    // if no filter function is provided, but filtering shall be strict, define the respective filter
    const strict = this.config.strict === undefined || this.config.strict;
    if (this.column.filterFunction === undefined && strict) {
      this.column.filterFunction = (v, f) => v?.toString() === f;
    }
    super.ngOnInit();
  }
}
