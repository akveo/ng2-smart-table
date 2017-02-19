import { Component, OnInit } from '@angular/core';

import { DefaultFilter } from './default-filter';
import { Column } from '../../../lib/data-set/column';

@Component({
  selector: 'input-filter',
  template: `
    <input #filterEl
    [(ngModel)]="query"
    [ngClass]="inputClass"
    class="form-control"
    type="text" 
    placeholder="{{ column.title }}" />
  `
})
export class InputFilterComponent extends DefaultFilter implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.setupFilter('keyup', (ev: any) => ev.which !== 9);
  }
}
