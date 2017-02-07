import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Cell, DefaultEditor, Editor } from '../../../../../../ng2-smart-table';

@Component({
  template: `
    Name: <input [ngClass]="inputClass"
            #name
            class="form-control short-input"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="updateValue()"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">
    Url: <input [ngClass]="inputClass"
            #url
            class="form-control short-input"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="updateValue()"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">
    <div [hidden]="true" [innerHTML]="cell.newValue" #htmlValue></div>
    `
})
export class CustomColumnComponent extends DefaultEditor implements Editor{

  @ViewChild('name') name: ElementRef;
  @ViewChild('url') url: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== ''){
      this.name.nativeElement.value = this.getUrlName();
      this.url.nativeElement.value = this.getUrlHref();
    }
  }

  updateValue() {
    const href = this.url.nativeElement.value;
    const name = this.name.nativeElement.value;
    this.cell.newValue = `<a href='${href}'>${name}</a>`;
  }

  getUrlName() {
    return this.htmlValue.nativeElement.innerText;
  }

  getUrlHref() {
    return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
  }
}
