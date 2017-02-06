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
  inputSub: Subscription;
  @ViewChild('firstInput') firstInput: ElementRef;
  @ViewChild('secondInput') secondInput: ElementRef;

  constructor() {
    super();
  }

  ngOnInit(): void {
    // check if any value is set
    if (this.cell.newValue !== ''){
      const valueArr = this.cell.newValue.split('|');
      this.firstVal = valueArr[0];
      this.secondVal = valueArr[1];
    }

    // observe for input value changes
    this.inputSub = Observable.combineLatest(
      this.observeEvent(this.firstInput, this.firstVal),
      this.observeEvent(this.secondInput, this.secondVal),
    ).subscribe((ev) => {
      this.cell.setValue(`${ev[0]}|${ev[1]}`);
    });
  }

  observeEvent(el: ElementRef, initialValue: string): Observable<string> {
    return Observable.fromEvent(el.nativeElement, 'keyup')
      .map((ev) => ev['target'].value)
      .startWith(initialValue);
  }

  ngOnDestroy(): void {
    this.inputSub.unsubscribe();
  }
}
