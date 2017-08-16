import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Cell, DefaultEditor, Editor } from '../../../../ng2-smart-table';

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
            (keydown.esc)="onStopEditing.emit()"><br>
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
    <div [hidden]="true" [innerHTML]="cell.getValue()" #htmlValue></div>
  `,
})
export class CustomEditorComponent extends DefaultEditor implements AfterViewInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('url') url: ElementRef;
  @ViewChild('htmlValue') htmlValue: ElementRef;

  openInNewWindow: boolean;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      this.name.nativeElement.value = this.getUrlName();
      this.url.nativeElement.value = this.getUrlHref();
    }

    this.openInNewWindow = this.cell.getColumn().getConfig()
      ? this.cell.getColumn().getConfig().openInNewWindow || false
      : false;
  }

  updateValue() {
    const href = this.url.nativeElement.value;
    const name = this.name.nativeElement.value;

    let value;

    if (this.openInNewWindow) {
      value = `<a href='${href}' target="_blank">${name}</a>`;
    } else {
      value = `<a href='${href}'>${name}</a>`;
    }

    this.cell.newValue = value;

  }

  getUrlName(): string {
    return this.htmlValue.nativeElement.innerText;
  }

  getUrlHref(): string {
    return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
  }
}
