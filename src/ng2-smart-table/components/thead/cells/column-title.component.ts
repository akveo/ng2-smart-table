import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Column } from '../../../lib/data-set/column';

@Component({
  selector: 'ng2-st-column-title',
  template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `
})
export class ColumnTitleComponent {

  @Input() column: Column;
  @Input() source: any;
  @Output() sort = new EventEmitter<any>();
}
