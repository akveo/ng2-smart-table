import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'password-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input [ngClass]="inputClass"
           type="password"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="'******'"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
})
export class PasswordEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}