import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-thead-titles-row]',
  template: `
    <th ng2-st-checkbox-select-all *ngIf="grid.isMultiSelectVisible()"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="grid.showActionColumn('left')" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class">
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="grid.showActionColumn('right')" [grid]="grid"></th>
    `
})
export class TheadTitlesRowComponent {

  @Input() grid: Grid;
  @Input() isAllSelected: boolean;
  @Input() source: any;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();
}
