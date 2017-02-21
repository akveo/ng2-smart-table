import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DefaultFilter } from './default-filter';
import { Column } from '../../../lib/data-set/column';

@Component({
  selector: 'checkbox-filter',
  styles: [`
    a {
      font-weight: normal;
    }
  `],
  template: `
    <input type="checkbox" #filterEl [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive" (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `
})
export class CheckboxFilterComponent extends DefaultFilter implements OnInit {

  filterActive: boolean = false;

  constructor() {
    super();
  }

  ngOnInit() {
    this.changesSubscription = Observable.fromEvent(this.filterEl.nativeElement, 'change')
      .map((ev: any) => ev.target.checked)
      .debounceTime(this.delay)
      .subscribe((checked: boolean) => {
        this.filterActive = true;
        const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
        const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
        this.query = checked ? trueVal : falseVal;
        this.setFilter();
      });
  }

  resetFilter(event) {
    event.preventDefault();
    this.query = '';
    this.filterEl.nativeElement.checked = false;
    this.filterActive = false;
    this.setFilter();
  }
}
