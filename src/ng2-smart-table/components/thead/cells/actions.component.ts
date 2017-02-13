import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-actions',
  template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="grid.getSetting('add.createButtonContent')" (click)="create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="grid.getSetting('add.cancelButtonContent')" (click)="grid.createFormShown = false;"></a>
  `
})
export class ActionsComponent {

  @Input() grid: Grid;
  @Output() create = new EventEmitter<any>();
}
