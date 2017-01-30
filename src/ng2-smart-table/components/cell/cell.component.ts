import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CompleterService } from 'ng2-completer';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'ng2-smart-table-cell',
  styleUrls: ['./cell.scss'],
  template: `
    <view-cell-component *ngIf="!isInEditing" [cell]="cell"></view-cell-component>
    <edit-cell-component *ngIf="isInEditing" [cell]="cell" [inputClass]="inputClass" (edited)="onEdited($event)"></edit-cell-component>
  `,
})
export class CellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  onEdited(event): boolean {
    this.edited.emit(event);
    return false;
  }
}
