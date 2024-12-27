import {Component, OnInit} from '@angular/core';

import {DefaultEditor} from './default-editor';
import {CheckboxEditorSettings} from "../../../lib/settings";

@Component({
    selector: 'checkbox-editor',
    styleUrls: ['./editor.component.scss'],
    template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() === trueVal"
           (click)="onClick.emit($event)"
           (change)="onChange($any($event.target).checked)">
    `,
    standalone: false
})
export class CheckboxEditorComponent extends DefaultEditor implements OnInit {

  trueVal = 'true';
  falseVal = 'false';

  constructor() {
    super();
  }

  ngOnInit() {
    const config = this.cell.getColumn().editor.config;
    if (config !== undefined) {
      const ces = config as CheckboxEditorSettings;
      this.trueVal = ces.true;
      this.falseVal = ces.false;
    }
  }

  onChange(newVal: boolean) {
    this.cell.setValue(newVal ? this.trueVal : this.falseVal);
  }
}
