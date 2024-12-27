import {Component, OnInit} from '@angular/core';

import {DefaultFilter} from './default-filter';
import {CheckboxFilterSettings} from "../../../lib/settings";

@Component({
    selector: 'checkbox-filter',
    template: `
    <input type="checkbox" (change)="onChecked($any($event.target).checked)" [checked]="checked" [ngClass]="inputClass">
    <a href="#" *ngIf="filterActive" (click)="resetFilter($event)">{{resetText}}</a>
  `,
    standalone: false
})
export class CheckboxFilterComponent extends DefaultFilter implements OnInit {

  filterActive: boolean = false;
  checked: boolean = false;

  trueVal = 'true';
  falseVal = 'false';
  resetText = 'reset';

  ngOnInit() {
    if (this.column.filter.config !== undefined) {
      const config = this.column.filter.config as CheckboxFilterSettings;
      this.trueVal = config?.true ?? 'true';
      this.falseVal = config?.false ?? 'false';
      this.resetText = config?.resetText ?? 'reset';
    }
    super.ngOnInit();
  }

  onChecked(checked: boolean) {
    this.filterActive = true;
    this.checked = checked;
    this.onValueChanged(checked ? this.trueVal : this.falseVal);
  }

  resetFilter(event: any) {
    event.preventDefault();
    this.query = '';
    this.checked = false;
    this.filterActive = false;
    this.setFilter();
  }
}
