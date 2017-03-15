import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-create-cancel',
  template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="grid.getSetting('edit.saveButtonContent')" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="grid.getSetting('edit.cancelButtonContent')" (click)="onCancelEdit($event)"></a>
  `
})
export class TbodyCreateCancelComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;

  onSave(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.grid.save(this.row, this.editConfirm);
  }

  onCancelEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.row.isInEditing = false;
  }
}
