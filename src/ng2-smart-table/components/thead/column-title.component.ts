import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../lib/grid';

@Component({
  selector: 'column-title-ng2-st',
  template: `
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class">
      <div class="ng2-smart-title">b
        <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
      </div>
    </th>
  `
})
export class ColumnTitleComponent {

  @Input() grid: Grid;
  @Input() source: any;
  @Output() sort = new EventEmitter<any>();
}