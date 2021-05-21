import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-tbody-custom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template ngFor let-action [ngForOf]="grid.getSetting('actions.custom')">
      <a class="ng2-smart-action ng2-smart-action-custom-custom"
         [innerHTML]="action.title"
         [class.disabled]="isDisabled(action)"
         [attr.disabled]="isDisabled(action)"
         *ngIf="action.hideFunction ? action.hideFunction(row.getData()) : true"
         (click)="onCustom(action, $event)"></a>
    </ng-template>`
})
export class TbodyCustomComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: any;
  @Output() custom = new EventEmitter<any>();

  isDisabled(action: any) {
    return action.disabledFunction ? action.disabledFunction(this.row.getData()) : false;
  }

  onCustom(action: any, event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.custom.emit({
      action: action.name,
      data: this.row.getData(),
      source: this.source
    });
  }

}
