import { Component, EventEmitter } from '@angular/core';
import { Cell } from '../../../../../../src/ng2-smart-table.module';

@Component({
  selector: 'cell-type-textarea',
  template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getColumn().id"
              [disabled]="!cell.getColumn().isEditable"
              [placeholder]="cell.getColumn().title"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `
})
export class CustomColumnComponent {
  cell: Cell;
  inputClass: any;

  onStopEditing = new EventEmitter<any>();
  onEdited = new EventEmitter<any>();
  onClick = new EventEmitter<any>();

  constructor() {
  }
}