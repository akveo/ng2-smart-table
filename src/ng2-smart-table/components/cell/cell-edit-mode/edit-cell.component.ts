// controllo se e' custom o meno e mostro custom-edit o default-edit
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
    selector: 'table-cell-edit-mode',
    template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `
})
export class EditCellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';

  @Output() public edited = new EventEmitter<any>();

  onEdited(event): boolean {
    this.edited.next(event);
    return false;
  }

  getEditorType(): string {
    return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
  }
}
