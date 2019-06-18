import {Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-actions',
  template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
})
export class ActionsComponent implements OnChanges {

  @Input() grid: Grid;
  @Output() create = new EventEmitter<any>();

  createButtonContent: string;
  cancelButtonContent: string;

  ngOnChanges() {
    this.createButtonContent = this.grid.getSetting('add.createButtonContent');
    this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
  }
}
