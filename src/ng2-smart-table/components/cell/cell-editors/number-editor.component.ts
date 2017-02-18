import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'number-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input [ngClass]="inputClass"
           type="number"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()"
           required="{{cell.getColumn().getConfig()?.required?true:false}}"
           [min]="cell.getColumn().getConfig()?.min"
           [max]="cell.getColumn().getConfig()?.max"
           [gt]="cell.getColumn().getConfig()?.gt"
           [lt]="cell.getColumn().getConfig()?.lt"
           [range]="cell.getColumn().getConfig()?.range"
           #field="ngModel">
    `,
})
export class NumberEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
