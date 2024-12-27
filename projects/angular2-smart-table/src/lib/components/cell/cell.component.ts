import {Component, EventEmitter, Input} from '@angular/core';

import {Grid} from '../../lib/grid';
import {Cell} from '../../lib/data-set/cell';
import {Row} from '../../lib/data-set/row';
import {CreateCancelEvent, CreateConfirmEvent, EditCancelEvent, EditConfirmEvent} from '../../lib/events';

@Component({
    selector: 'angular2-smart-table-cell',
    template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited()"
                          (stopEditing)="onStopEditing()"
    ></table-cell-edit-mode>
  `,
    standalone: false
})
export class CellComponent {

  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() cell!: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;
  @Input() isNew!: boolean;
  // if isNew === false
  @Input() editConfirm!: EventEmitter<EditConfirmEvent>;
  @Input() editCancel!: EventEmitter<EditCancelEvent>;
  // if isNew === true
  @Input() createConfirm!: EventEmitter<CreateConfirmEvent>;
  @Input() createCancel!: EventEmitter<CreateCancelEvent>;

  onEdited() {
    if (this.isNew) {
      this.grid.create(this.grid.createFormRow, this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }

  onStopEditing() {
    if (this.isNew) {
      this.grid.createFormShown = false;
      this.createCancel.emit({
        discardedData: this.grid.createFormRow.getNewData(),
        source: this.grid.source,
      });
    } else {
      this.row.isInEditing = false;
      this.editCancel.emit({
        row: this.row,
        data: this.row.getData(),
        discardedData: this.row.getNewData(),
        source: this.grid.source,
      });
    }
  }
}
