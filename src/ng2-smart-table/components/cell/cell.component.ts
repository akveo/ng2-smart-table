import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'ng2-smart-table-cell',
  styles: [require('./cell.scss')],
  template: `
    <div *ngIf="!cell.getRow().isInEditing && cell.getColumn().type !== 'html'">{{ cell.getValue() }}</div>
    <div *ngIf="!cell.getRow().isInEditing && cell.getColumn().type === 'html'" [innerHTML]="cell.getValue()"></div>
    <input *ngIf="cell.getRow().isInEditing" 
      [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getColumn().id"
      [placeholder]="cell.getColumn().title"
      [disabled]="!cell.getColumn().isEditable"
      (click)="onClick($event)"
      (keydown.enter)="onEdited($event)" 
      (keydown.esc)="onStopEditing()"
      >
  `
})
export class CellComponent {


  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  constructor(public element: ElementRef) {
    this.element.nativeElement // <- your direct element reference
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onEdited(event): boolean {
    this.edited.emit(event);
    return false;
  }

  onClick(event): void {
    event.stopPropagation();
  }

  ngAfterViewInit() {
    var el = this.element.nativeElement;
    let input = el.getElementsByTagName("INPUT")[0];
    if (input){
      let inputAttributes = this.cell.getColumn().inputAttributes;
      for (let k in inputAttributes){
        input.setAttribute(k, inputAttributes[k]);
      }
    }

  }
}
