import { Component } from '@angular/core';
import { Cell } from '../../../../../../src/ng2-smart-table.module';

@Component({
  selector: 'cell-type-textarea',
  template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getColumn().id"
              [disabled]="!cell.getColumn().isEditable"
              [placeholder]="cell.getColumn().title">
    </textarea>
    `
})
export class CustomColumnComponent {
  cell: Cell;
  inputClass: any;

  constructor() {
  }
}