import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';

import { DefaultFilter } from './default-filter';

@Component({
  selector: 'input-filter',
  template: `
    <input [(ngModel)]="query"
           [ngClass]="inputClass"
           [formControl]="inputControl"
           class="form-control"
           type="text"
           placeholder="{{ column.title }}" />
  `,
})
export class InputFilterComponent extends DefaultFilter implements OnInit {

  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .pipe(
        skip(1),
        distinctUntilChanged(),
        debounceTime(this.delay)
      )
      .subscribe((value: string) => this.setFilter());
  }
}
