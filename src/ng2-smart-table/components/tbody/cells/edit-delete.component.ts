import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  template: `
    <a href="#" *ngIf="grid.getSetting('actions.edit')" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="grid.getSetting('edit.editButtonContent')" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="grid.getSetting('actions.delete')" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="grid.getSetting('delete.deleteButtonContent')" (click)="onDelete($event)"></a>
  `
})
export class TbodyEditDeleteComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: any;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source
      });
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }
}
