import {Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-view-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" data-title="{{cell.getTitle()}}"  [cell]="cell"></custom-view-component>
        <div class="ng2-smart-table-cell-value" *ngSwitchCase="'html'" data-title="{{cell.getTitle()}}" [innerHTML]="cell.getValue()"></div>
        <div class="ng2-smart-table-cell-value" data-title="{{cell.getTitle()}}" *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `,
})
export class ViewCellComponent {

  @Input() cell: Cell;
}
