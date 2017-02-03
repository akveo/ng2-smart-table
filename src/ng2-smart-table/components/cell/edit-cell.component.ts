import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'table-cell-edit-mode',
  templateUrl: 'edit-cell.component.html',
})
export class EditCellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  onEdited(event): boolean {
    this.edited.next(event);
    return false;
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onClick(event): void {
    event.stopPropagation();
  }
}
