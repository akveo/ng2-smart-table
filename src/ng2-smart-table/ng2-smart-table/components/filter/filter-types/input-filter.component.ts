import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DefaultFilter } from './default-filter';
import { Column } from '../../../lib/data-set/column';

@Component({
  selector: 'input-filter',
  template: `
    <input [(ngModel)]="query"
           [ngClass]="inputClass"
           [formControl]="inputControl"
           class="form-control"
           type="text" 
           placeholder="{{ column.title }}" />
  `
})
export class InputFilterComponent extends DefaultFilter implements OnInit {

  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .distinctUntilChanged()
      .debounceTime(this.delay)
      .subscribe((value: string) => this.setFilter());
  }
}
