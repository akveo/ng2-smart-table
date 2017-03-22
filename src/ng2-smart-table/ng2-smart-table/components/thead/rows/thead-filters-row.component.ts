import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-thead-filters-row]',
  template: `
    <th *ngIf="grid.isMultiSelectVisible()"></th>
    <th ng2-st-add-button *ngIf="grid.showActionColumn('left')"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="grid.getSetting('filter.inputClass')"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="grid.showActionColumn('right')"
                          [grid]="grid"
                          [source]="source"                          
                          (create)="create.emit($event)">
    </th>
    `
})
export class TheadFitlersRowComponent {

  @Input() grid: Grid;
  @Input() source: any;
  @Output() create = new EventEmitter<any>();
  @Output() filter = new EventEmitter<any>();
}
