import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';

@Component({
  selector: 'ng2-smart-table-filter',
  styleUrls: ['filter.scss'],
  template: `
    <div class="ng2-smart-filter" *ngIf="column.isFilterable">
      <div [ngSwitch]="filterType">
        <checkbox-filter-type *ngSwitchCase="'checkbox'"
                      [column]="column"
                      [inputClass]="inputClass"
                      (valueChange)="_filter($event)">
        </checkbox-filter-type>
        <input-filter-type *ngSwitchDefault
                           [column]="column"
                           [inputClass]="inputClass"
                           (valueChange)="_filter($event)">
        </input-filter-type>
      </div>
    </div>
  `
})
export class FilterComponent implements OnInit, AfterViewInit {

  filterType: string = '';
  @Input() column: Column;
  @Input() source: DataSource;
  @Input() inputClass: string = '';

  @Output() filter = new EventEmitter<any>();

  query: string = '';
  timeout: any;
  delay: number = 300;

  ngOnInit() {
    if (this.column.filter && this.column.filter.useEditorConfig && this.column.editor) {
      this.filterType = this.column.editor.type;
    }
  }

  ngAfterViewInit() {
    this.source.onChanged().subscribe((elements) => {
      let filterConf = this.source.getFilter();
      if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
        this.query = '';
      }
    });
  }

  _filter(query: string): boolean {
    this.query = query;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.addFilter();
    }, this.delay);
    this.filter.emit(null);
    return false;
  }

  addFilter() {
    this.source.addFilter({
      field: this.column.id,
      search: this.query,
      filter: this.column.getFilterFunction()
    });
  }
}