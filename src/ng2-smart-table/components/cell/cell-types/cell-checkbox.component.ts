import { Component, Output, EventEmitter } from '@angular/core';

import { DefaultCellType } from './default-cell-type';

@Component({
  selector: 'cell-type-checkbox',
  styleUrls: ['edit-input.component.scss'],
  template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getColumn().id"
           [disabled]="!cell.getColumn().isEditable"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `,
})
export class CellCheckboxComponent extends DefaultCellType {

  constructor() {
    super();
  }

  onChange(event: any): void {
    const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
    const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
    this.cell.newValue = event.target.checked ? trueVal : falseVal;
  }
}
