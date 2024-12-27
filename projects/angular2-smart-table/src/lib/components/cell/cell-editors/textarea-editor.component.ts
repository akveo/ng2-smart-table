import {Component} from '@angular/core';

import {DefaultEditor} from './default-editor';

@Component({
    selector: 'textarea-editor',
    styleUrls: ['./editor.component.scss'],
    template: `
    <textarea [ngClass]="inputClass"
              [value]="cell.getValue()"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keyup)="cell.setValue($any($event.target).value)"
              (keydown.enter)="disableEnterKeySave || onEdited.emit()"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
    standalone: false
})
export class TextareaEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
