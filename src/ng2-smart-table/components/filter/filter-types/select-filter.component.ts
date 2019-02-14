import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { DefaultFilter } from './default-filter';

@Component({
  selector: 'select-filter',
  template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [formControl]="inputControl">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
})
export class SelectFilterComponent extends DefaultFilter implements OnInit {

  inputControl = new FormControl();

  @Input() set queryText(query: string) {
    this.query = query;
    this.inputControl.setValue(query);
  }

  constructor() {
    super();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.delay)
      )
      .subscribe((value: string) => {
        this.query = this.inputControl.value;
        this.setFilter();
      });
  }
}
