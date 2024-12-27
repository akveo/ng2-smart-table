import {Component} from '@angular/core';

import {DefaultEditor} from './default-editor';

@Component({
    selector: 'input-editor',
    styleUrls: ['./editor.component.scss'],
    template: `
    <input [ngClass]="inputClass"
           [value]="cell.getValue()"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keyup)="cell.setValue($any($event.target).value)"
           (keydown.enter)="disableEnterKeySave || onEdited.emit()"
           (keydown.esc)="onStopEditing.emit()">
    `,
    standalone: false
})
export class InputEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
