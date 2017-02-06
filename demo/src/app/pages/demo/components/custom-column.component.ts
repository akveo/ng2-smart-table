import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Cell, DefaultCellType } from '../../../../../../src/ng2-smart-table.module';

@Component({
  template: `
    From: <input [ngClass]="inputClass"
            #firstInput
            class="form-control short-input"
            [value]="firstVal"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="cell.newValue.from = $event.target.value"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">
    To: <input [ngClass]="inputClass"
            #secondInput
            class="form-control short-input"
            [value]="secondVal"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="cell.newValue.to = $event.target.value"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">
    `,
    styles: [`
      .short-input{
        width: 30%;
      }
    `]
})
export class CustomColumnComponent extends DefaultCellType{

  firstVal: string = '';
  secondVal: string = '';
  @ViewChild('firstInput') firstInput: ElementRef;
  @ViewChild('secondInput') secondInput: ElementRef;

  constructor() {
    super();
  }

  ngOnInit(): void {
    // check if any value is set
    if (this.cell.newValue !== ''){
      this.firstVal = this.cell.newValue['from'];
      this.secondVal = this.cell.newValue['to'];
    }else{
      this.cell.newValue = {from : 0, to: 0};
    }
  }
}
