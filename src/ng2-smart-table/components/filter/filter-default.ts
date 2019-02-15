import { Output, EventEmitter, Input } from '@angular/core';

import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';

export class FilterDefault {

  @Input() column: Column;
  @Input() source: DataSource;
  @Input() inputClass: string = '';

  @Output() filter = new EventEmitter<any>();

  query: string = '';

  onFilter(query: string) {
    this.source.addFilter({
      field: this.column.id,
      search: query,
      filter: this.column.getFilterFunction(),
    });
  }
}
