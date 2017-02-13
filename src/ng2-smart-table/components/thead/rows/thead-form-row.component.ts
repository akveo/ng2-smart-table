import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-thead-form-row]',
  template: `
      <td *ngIf="grid.isMultiSelectVisible()"></td>
      <td class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid"
                        (create)="create.emit($event)">
        </ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [inputClass]="grid.getSetting('add.inputClass')"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="create.emit($event)">
        </ng2-smart-table-cell>
      </td>
    `
})
export class TheadFormRowComponent {

  @Input() grid: Grid;
  @Output() create = new EventEmitter<any>();
}
