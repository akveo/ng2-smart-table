import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'textarea-editor',
  styleUrls: ['editor.component.scss'],
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
export class TextareaEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
