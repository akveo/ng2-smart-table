import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { DefaultCellType } from './default-cell-type';

@Component({
  selector: 'cell-type-textarea',
  template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getColumn().id"
              [disabled]="!cell.getColumn().isEditable"
              (click)="onClick($event)"
              (keydown.enter)="onEdited($event)"
              (keydown.esc)="onStopEditing()"
              [placeholder]="cell.getColumn().title">
    </textarea>
    `
})
export class CellTextareaComponent extends DefaultCellType {
  
  constructor() {
    super();
  }
}