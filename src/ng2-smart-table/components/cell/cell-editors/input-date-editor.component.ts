import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'input-date-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input [ngClass]="inputClass"
           type="date"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
  `,
})
export class InputDateEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
