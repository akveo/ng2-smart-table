import { Component, OnInit, Input } from '@angular/core';
import {DefaultEditor} from './default-editor';
import {ViewCell} from '../../../';

@Component({
  selector: 'datepicker-editor',
  template: `<div class="input-group">
    <span [owlDateTimeTrigger]="dt" class="input-group-addon"><i class="fa fa-calendar"></i></span>
    <input [owlDateTimeTrigger]="dt" [owlDateTime]="dt" 
           [(ngModel)]="inputModel" [placeholder]="placeholder" readonly class="form-control" />
  </div>
  <owl-date-time #dt pickerType="calendar" (afterPickerClosed)="onChange()"></owl-date-time>`,
  styles: ['.fa { font-size: 1.2rem; } input { padding: .375em .75em !important; }']
})
export class DatepickerEditorComponent extends DefaultEditor implements OnInit {

  @Input() placeholder: string = 'Choose a Date/Time';
  inputModel: Date;

  constructor() {
    super();
  }

  ngOnInit() {
    if(this.cell.newValue) {
      this.inputModel = new Date(this.cell.newValue);
      this.cell.newValue = this.inputModel.toISOString();
    }
  }

  onChange() {
    if(this.inputModel) {
      this.cell.newValue = this.inputModel.toISOString();
    }
  }
}

@Component({
  template: `{{value | date:'shortDate'}}`,
})
export class DatepickerRenderComponent implements ViewCell, OnInit {
  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() { }

}
