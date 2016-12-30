import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'ng2-smart-table-cell',
  styles: [require('./cell.scss')],
  template: `
    <div #cellContainer *ngIf="!cell.getRow().isInEditing && cell.getColumn().type !== 'html'">
    <span *ngIf="cell.getColumn().id == 'email'"><input type="checkbox" (change)="cell.isChecked = !cell.isChecked"></span>
      {{ cell.getValue() }}
    </div>
    <div #cellContainer *ngIf="!cell.getRow().isInEditing && cell.getColumn().type === 'html'" [innerHTML]="cell.getValue()"></div>
    <input *ngIf="cell.getRow().isInEditing" 
      [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getColumn().id" 
      [placeholder]="cell.getColumn().title"
      [disabled]="!cell.getColumn().isEditable"
      (click)="onClick($event)"
      (keydown.enter)="onEdited($event)" 
      (keydown.esc)="onStopEditing()">
  `
})
export class CellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();
  @Output() public checked: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('cellContainer') cellRef: ElementRef;

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  ngAfterViewInit(): void {
    const cellRenderFunc = this.cell.getColumn().getCellRenderFunction();

    if (cellRenderFunc) {
      cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement)
    }
  }

  onEdited(event): boolean {
    this.edited.emit(event);
    return false;
  }

  onClick(event): void {
    event.stopPropagation();
  }

  onChecked(event): boolean {
    this.checked.emit(this.cell.getValue());
    return false;
  }
}
