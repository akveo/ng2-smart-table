import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'input-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
})
export class InputEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
