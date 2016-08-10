import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';

@Component({
  selector: 'ng2-smart-table-filter',
  template: `
    <div class="ba-grid-filter" *ngIf="column.isFilterable">
      <input 
      [(ngModel)]="query"
      (keyup)="filter($event)"
      [class]="inputClass"
      type="text" 
      placeholder="{{ column.title }}" />
    </div>
  `
})
export class FilterComponent {

  @Input() column: Column;
  @Input() source: DataSource;
  @Input() inputClass: string = '';

  query: string = '';
  timeout: any;
  delay: number = 800;

  ngAfterViewInit(): void {
    this.source.onChanged().subscribe((elements) => {
      let filterConf = this.source.getFilter();
      if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
        this.query = '';
      }
    });
  }

  filter(event): boolean {
    if (event.which === 13) {
      this.addFilter();
    } else {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.addFilter();
      }, this.delay);
    }
    return false;
  }

  protected addFilter(): void {
    this.source.addFilter({
      field: this.column.id,
      search: this.query,
      filter: this.column.getFilterFunction()
    });
  }
}
