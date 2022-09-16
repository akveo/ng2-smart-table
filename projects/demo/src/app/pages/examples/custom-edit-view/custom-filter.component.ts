import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { DefaultFilter } from 'ng2-smart-table';

@Component({
  template: `
    <input 
      #number
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      [placeholder]="column.title"
      type="number">
  `,
})
export class CustomFilterComponent extends DefaultFilter implements OnInit, OnChanges {
  inputControl = new UntypedFormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.delay),
      )
      .subscribe((value: number) => {
        this.query = value !== null ? this.inputControl.value.toString() : '';
        this.setFilter();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query) {
      this.query = changes.query.currentValue;
      this.inputControl.setValue(this.query);
    }
  }
}
