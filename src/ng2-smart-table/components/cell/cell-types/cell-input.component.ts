import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { DefaultCellType } from './default-cell-type';

@Component({
  selector: 'cell-type-input',
  template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getColumn().id"
           [placeholder]="cell.getColumn().title"
           [disabled]="!cell.getColumn().isEditable"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `
})
export class CellInputComponent extends DefaultCellType {
  
  constructor() {
    super();
  }
}