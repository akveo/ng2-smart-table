import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: '[ng2-st-thead-form-row]',
  template: `
      <td *ngIf="grid.isMultiSelectVisible()"></td>
      <td class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="grid.getSetting('add.inputClass')"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
    `
})
export class TheadFormRowComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() createConfirm: EventEmitter<any>;
  @Output() create = new EventEmitter<any>();

  onCreate(event: any) {
    event.stopPropagation();

    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }
}
