import {AfterViewInit, Component} from '@angular/core';
import {DefaultEditor} from 'angular2-smart-table';

@Component({
    template: `
    Name: <input [ngClass]="inputClass"
            [value]="name"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (change)="name=$any($event.target).value; updateValue()"
            (keydown.enter)="onEdited.emit()"
            (keydown.esc)="onStopEditing.emit()"><br>
    Url: <input [ngClass]="inputClass"
            [value]="url"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (change)="url=$any($event.target).value; updateValue()"
            (keydown.enter)="onEdited.emit()"
            (keydown.esc)="onStopEditing.emit()">
  `,
    standalone: false
})
export class CustomEditorComponent extends DefaultEditor implements AfterViewInit {

  name: string = '';
  url: string = '';

  constructor() {
    super();
  }

  ngAfterViewInit() {
    const re = this.cell.getValue().match(/<a href="([^"]*)">([^<]*)<\/a>/);
    if (re !== null) {
      this.url = re[1];
      this.name = re[2];
    }
  }

  updateValue() {
    this.cell.setValue(`<a href='${this.url}'>${this.name}</a>`);
  }
}
