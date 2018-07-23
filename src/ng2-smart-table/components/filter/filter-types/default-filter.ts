import { Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';

export class DefaultFilter implements Filter, OnDestroy {

  delay: number = 300;
  changesSubscription: Subscription;
  @Input() query: string;
  @Input() inputClass: string;
  @Input() source: DataSource;
  @Input() column: Column;
  @Output() filter = new EventEmitter<string>();

  ngOnDestroy() {
    if (this.changesSubscription) {
      this.changesSubscription.unsubscribe();
    }
  }

  setFilter() {
    this.filter.emit(this.query);
  }

  addFilter(columnName: string, filterValue: string, filterFunction: any) {
    const filterConfig = {
      field: columnName,
      search: filterValue,
      filter: filterFunction
    }
    this.source.addFilter(filterConfig)
  }

  removeFilter(columnName: string) {
    const filterConfig = this.source.getFilter().filters;
    for(let i = 0; i < filterConfig.length; i++) {
      if(filterConfig[i].field === columnName) {
        filterConfig.splice(i, 1);
      }
    }
    this.source.setFilter(filterConfig);
  }
  
  onFilter(query: string) {
    this.source.addFilter({
      field: this.column.id,
      search: query,
      filter: this.column.getFilterFunction(),
    });
  }
}


export interface Filter {

  delay?: number;
  changesSubscription?: Subscription;
  query: string;
  inputClass: string;
  column: Column;
  filter: EventEmitter<string>;
}
