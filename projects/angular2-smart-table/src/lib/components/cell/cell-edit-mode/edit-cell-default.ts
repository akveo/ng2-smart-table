import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Cell} from '../../../lib/data-set/cell';

@Component({
    template: '',
    standalone: false
})
export class EditCellDefault {

  @Input() cell!: Cell;
  @Input() inputClass: string = '';

  @Output() edited = new EventEmitter<void>();
  @Output() stopEditing = new EventEmitter<void>();

  onEdited(): boolean {
    this.edited.emit();
    return false;
  }

  onStopEditing(): boolean {
    this.stopEditing.emit();
    return false;
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
