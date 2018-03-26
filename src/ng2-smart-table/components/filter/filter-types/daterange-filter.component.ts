import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';

import { DefaultFilter } from './default-filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'daterange-filter',
  template: `      
	<my-date-range-picker name="mydaterange" [options]="myDateRangePickerOptions"
						  (dateRangeChanged)="onDateRangeChanged($event)">
    </my-date-range-picker>
  `,
})
export class DateRangeFilterComponent extends DefaultFilter implements OnInit {

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy',
  };

  dateRangeContent = new Subject<any>();

  constructor() {
    super();
  }

  ngOnInit() {
    const config = this.column.getFilterConfig().daterange;
    this.myDateRangePickerOptions.dateFormat = config.format;

    this.changesSubscription = this.dateRangeContent
        .map((ev: any) => (ev && ev.title) || ev || '')
        .distinctUntilChanged()
        .debounceTime(this.delay)
        .subscribe((search: string | any) => {
          if (search.beginEpoc > 0) {
            this.query = search;
          } else {
            this.query = '';
          }
          this.setFilter();
        });
  }

  onDateRangeChanged(event: IMyDateRangeModel) {
    // event properties are: event.beginDate, event.endDate, event.formatted,
    // event.beginEpoc and event.endEpoc
    this.dateRangeContent.next(event);
  }
}
