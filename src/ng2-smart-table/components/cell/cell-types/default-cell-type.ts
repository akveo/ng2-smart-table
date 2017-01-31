import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

export class DefaultCellType {
  @Input() cell: Cell;
  @Input() inputClass: string;

  @Output() onStopEditing: EventEmitter<any> = new EventEmitter();
  @Output() onEdited: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<any> = new EventEmitter();
}