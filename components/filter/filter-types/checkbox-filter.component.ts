import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DefaultFilter } from './default-filter';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'checkbox-filter',
  template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `,
})
export class CheckboxFilterComponent extends DefaultFilter implements OnInit {

  filterActive: boolean = false;
  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.changesSubscription = this.inputControl.valueChanges
      .debounceTime(this.delay)
      .subscribe((checked: boolean) => {
        this.filterActive = true;
        const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
        const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
        this.query = checked ? trueVal : falseVal;
        this.setFilter();
      });
  }

  resetFilter(event: any) {
    event.preventDefault();
    this.query = '';
    this.inputControl.setValue(false, { emitEvent: false });
    this.filterActive = false;
    this.setFilter();
  }
}
