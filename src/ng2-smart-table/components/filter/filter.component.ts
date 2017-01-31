import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';

@Component({
  selector: 'ng2-smart-table-filter',
  styleUrls: ['filter.scss'],
  template: `
    <div class="ng2-smart-filter" *ngIf="column.isFilterable">
      <input 
        [(ngModel)]="query"
        (keyup)="_filter($event)"
        [ngClass]="inputClass"
        class="form-control"
        type="text" 
        placeholder="{{ column.title }}" />
    </div>
  `
})
export class FilterComponent implements AfterViewInit {

  @Input() column: Column;
  @Input() source: DataSource;
  @Input() inputClass: string = '';

  @Output() filter = new EventEmitter<any>();

  query: string = '';
  timeout: any;
  delay: number = 300;

  ngAfterViewInit(): void {
    this.source.onChanged().subscribe((elements) => {
      let filterConf = this.source.getFilter();
      if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
        this.query = '';
      }
    });
  }

  _filter(event): boolean {
    if (event.which === 13) {
      this.addFilter();
      // ignore tab component
    } else if (event.which !== 9) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.addFilter();
      }, this.delay);
    }
    this.filter.emit(null);
    return false;
  }

  addFilter(): void {
    this.source.addFilter({
      field: this.column.id,
      search: this.query,
      filter: this.column.getFilterFunction()
    });
  }
}
