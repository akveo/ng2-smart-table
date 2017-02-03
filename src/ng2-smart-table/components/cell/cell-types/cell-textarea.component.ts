import { Component } from '@angular/core';

import { DefaultCellType } from './default-cell-type';

@Component({
  selector: 'cell-type-textarea',
  styleUrls: ['edit-input.component.scss'],
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
    `,
})
export class CellTextareaComponent extends DefaultCellType {

  constructor() {
    super();
  }
}
