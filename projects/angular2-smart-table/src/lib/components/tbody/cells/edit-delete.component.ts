import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

import {Grid} from '../../../lib/grid';
import {Row} from '../../../lib/data-set/row';
import {DataSource} from '../../../lib/data-source/data-source';
import {DeleteConfirmEvent, DeleteEvent, EditEvent} from '../../../lib/events';
import {SecurityTrustType} from '../../../pipes/bypass-security-trust.pipe';

@Component({
    selector: 'angular2-st-tbody-edit-delete',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <a href="#" *ngIf="editVisible" class="angular2-smart-action angular2-smart-action-edit-edit"
       [ngClass]="{'not-allowed': editDisabled}"
       [innerHTML]="editRowButtonContent | bypassSecurityTrust: editButtonBypassSecurityTrust"
       (click)="onEdit($event)"></a>
    <a href="#" *ngIf="deleteVisible" class="angular2-smart-action angular2-smart-action-delete-delete"
       [ngClass]="{'not-allowed': deleteDisabled}"
       [innerHTML]="deleteRowButtonContent | bypassSecurityTrust: deleteButtonBypassSecurityTrust" (click)="onDelete($event)"></a>
  `,
    standalone: false
})
export class TbodyEditDeleteComponent implements OnChanges {

  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() source!: DataSource;
  @Input() deleteConfirm!: EventEmitter<DeleteConfirmEvent>;

  @Output() edit = new EventEmitter<EditEvent>();
  @Output() delete = new EventEmitter<DeleteEvent>();
  @Output() editRowSelect = new EventEmitter<any>();

  editRowButtonContent!: string;
  editButtonBypassSecurityTrust: SecurityTrustType = 'none';
  editHiddenWhenFunction: (row: Row) => boolean = (_) => false;
  editDisabledWhenFunction: (row: Row) => boolean = (_) => false;
  deleteHiddenWhenFunction: (row: Row) => boolean = (_) => false;
  deleteDisabledWhenFunction: (row: Row) => boolean = (_) => false;
  deleteRowButtonContent!: string;
  deleteButtonBypassSecurityTrust: SecurityTrustType = 'none';

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.editDisabled) return;

    this.editRowSelect.emit(this.row);

    if (this.grid.settings.mode === 'external') {
      this.edit.emit({
        row: this.row,
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
    if (this.deleteDisabled) return;

    if (this.grid.settings.mode === 'external') {
      this.delete.emit({
        row: this.row,
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }

  get editVisible(): boolean {
    return !this.editHiddenWhenFunction(this.row);
  }

  get editDisabled(): boolean {
    return this.editDisabledWhenFunction(this.row);
  }

  get deleteVisible(): boolean {
    return !this.deleteHiddenWhenFunction(this.row);
  }

  get deleteDisabled(): boolean {
    return this.deleteDisabledWhenFunction(this.row);
  }

  ngOnChanges() {
    const actions = this.grid.settings.actions;
    if (actions === false || actions === undefined) {
      // handle the "flexibility" of this property....
      this.editHiddenWhenFunction = (_) => (actions === false);
      this.deleteHiddenWhenFunction = (_) => (actions === false);
      return;
    }

    this.editRowButtonContent = this.grid.settings.edit?.editButtonContent ?? 'Edit';
    this.editButtonBypassSecurityTrust = this.grid.settings.edit?.sanitizer?.bypassHtml ? 'html' : 'none';
    this.editHiddenWhenFunction = this.grid.settings.edit?.hiddenWhen ?? ((_) => (actions.edit === false));
    this.editDisabledWhenFunction = this.grid.settings.edit?.disabledWhen ?? this.editDisabledWhenFunction;
    this.deleteRowButtonContent = this.grid.settings.delete?.deleteButtonContent ?? 'Delete';
    this.deleteButtonBypassSecurityTrust = this.grid.settings.delete?.sanitizer?.bypassHtml ? 'html' : 'none';
    this.deleteHiddenWhenFunction = this.grid.settings.delete?.hiddenWhen ?? ((_) => (actions.delete === false));
    this.deleteDisabledWhenFunction = this.grid.settings.delete?.disabledWhen ?? this.deleteDisabledWhenFunction;
  }
}
