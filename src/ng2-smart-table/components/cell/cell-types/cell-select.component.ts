import { Component } from '@angular/core';

import { DefaultCellType } from './default-cell-type';

@Component({
  selector: 'cell-type-select',
  template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getColumn().id"
            [disabled]="!cell.getColumn().isEditable"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
})
export class CellSelectComponent extends DefaultCellType {

  constructor() {
    super();
  }
}