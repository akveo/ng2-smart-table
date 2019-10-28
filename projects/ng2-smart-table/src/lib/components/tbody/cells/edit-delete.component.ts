import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit" [ngClass]="isActionEditDisable?editDisableClassName:''"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete" [ngClass]="isActionDeleteDisable?deleteDisableClassName:''"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `,
})
export class TbodyEditDeleteComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: DataSource;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  isActionEdit: boolean;
  isActionDelete: boolean;
  editRowButtonContent: string;
  deleteRowButtonContent: string;

  isActionEditDisable: boolean;
  isActionDeleteDisable: boolean;
  editDisableClassName: string;
  deleteDisableClassName: string;

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.isActionEditDisable) return false;

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.isActionDeleteDisable) return false;

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }

  ngOnChanges() {
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.editDisableClassName = this.grid.getSetting('edit.disableClassName', 'disabled');
    this.deleteDisableClassName = this.grid.getSetting('delete.disableClassName', 'disabled');
    const editButtonContent = this.grid.getSetting('edit.editButtonContent');
    this.editRowButtonContent = typeof editButtonContent === 'function' ? editButtonContent(this) : editButtonContent;
    const deleteButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    this.deleteRowButtonContent = typeof deleteButtonContent === 'function' ? deleteButtonContent(this) : deleteButtonContent;
  }
}
