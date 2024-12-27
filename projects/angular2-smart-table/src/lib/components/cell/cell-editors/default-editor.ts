import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Cell} from '../../../lib/data-set/cell';

@Component({
    template: '',
    standalone: false
})
export class DefaultEditor implements Editor {
  @Input() cell!: Cell;
  @Input() inputClass!: string;

  @Output() onStopEditing = new EventEmitter<void>();
  @Output() onEdited = new EventEmitter<void>();
  @Output() onClick = new EventEmitter<MouseEvent>();

  get disableEnterKeySave(): boolean {
    return this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().disableEnterKeySave;
  }
}

export interface Editor {
  cell: Cell;
  inputClass: string;
  onStopEditing: EventEmitter<void>;
  onEdited: EventEmitter<void>;
  onClick: EventEmitter<MouseEvent>;
}
