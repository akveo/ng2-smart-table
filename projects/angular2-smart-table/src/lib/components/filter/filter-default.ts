import {Component, Input} from '@angular/core';

import {Column} from '../../lib/data-set/column';
import {DataSource} from '../../lib/data-source/data-source';

@Component({
    template: '',
    standalone: false
})
export class FilterDefault {

  @Input() column!: Column;
  @Input() source!: DataSource;
  @Input() inputClass: string = '';
  @Input() debounceTime: number = 300;
  @Input() query: string = '';

  onFilter(query: string) {
    if (query === '') {
      this.source.removeFilter(this.column.id);
    } else {
      this.source.addFilter({
        field: this.column.id,
        search: query,
        filter: this.column.filterFunction,
      });
    }
  }
}
