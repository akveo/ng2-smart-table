import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-view-mode',
  template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
})
export class ViewCellComponent {

  @Input() cell: Cell;
}
