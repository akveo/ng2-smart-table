import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ngx-st-tbody-custom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let action of grid.getSetting('actions.custom')">
      <a href="#" class="ngx-smart-action ngx-smart-action-custom-custom"
         *ngIf="!action.renderComponent"
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
      <a href="#" class="ngx-smart-action ngx-smart-action-custom-custom"
         *ngIf="action.renderComponent"
         (click)="onCustom(action, $event)">
        <ngx-st-tbody-custom-item class="ngx-smart-action ngx-smart-action-custom-custom"
                                  [action]="action"
                                  [row]="row"></ngx-st-tbody-custom-item>
      </a>

    </ng-container>
  `,
})
export class TbodyCustomComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: any;
  @Output() custom = new EventEmitter<any>();

  onCustom(action: any, event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.custom.emit({
      action: action.name,
      data: this.row.getData(),
      source: this.source,
    });
  }

}
