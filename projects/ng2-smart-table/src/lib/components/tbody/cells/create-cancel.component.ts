import {Component, Input, EventEmitter, OnChanges} from '@angular/core';

import {Grid} from '../../../lib/grid';
import {Row} from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-create-cancel',
  template: `
    <div class="line-block">
      <button [innerHTML]="saveButtonContent" (click)="onSave($event)"></button>
      <button [innerHTML]="cancelButtonContent" class="cancel-button" (click)="onCancelEdit($event)"></button>
    </div>
  `,
})
export class TbodyCreateCancelComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;

  cancelButtonContent: string;
  saveButtonContent: string;

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

  ngOnChanges() {
    this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
    this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
  }
}
