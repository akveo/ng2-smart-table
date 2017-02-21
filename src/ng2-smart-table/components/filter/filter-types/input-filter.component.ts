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
    this.changesSubscription = this.setupFilter('keyup', (ev: any) => ev.which !== 9) // filter out tab events
      .subscribe((value: string) => this.setFilter());
  }
}
