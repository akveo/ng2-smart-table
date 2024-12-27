import {Component, EventEmitter, Input, OnChanges} from '@angular/core';

import {Grid} from '../../../lib/grid';
import {CreateCancelEvent, CreateConfirmEvent} from '../../../lib/events';
import {SecurityTrustType} from '../../../pipes/bypass-security-trust.pipe';

@Component({
    // TODO: @breaking-change rename the selector to angular2-st-thead-create-cancel in the next major version
    selector: 'angular2-st-actions',
    template: `
    <a href="#" class="angular2-smart-action angular2-smart-action-add-create"
        [innerHTML]="createButtonContent | bypassSecurityTrust: bypassSecurityTrust" (click)="onCreate($event)"></a>
    <a href="#" class="angular2-smart-action angular2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent | bypassSecurityTrust: bypassSecurityTrust" (click)="onCancelCreate($event)"></a>
  `,
    standalone: false
})
export class TheadCreateCancelComponent implements OnChanges {

  @Input() grid!: Grid;
  @Input() createConfirm!: EventEmitter<CreateConfirmEvent>;
  @Input() createCancel!: EventEmitter<CreateCancelEvent>;

  createButtonContent!: string;
  cancelButtonContent!: string;
  bypassSecurityTrust: SecurityTrustType = 'none';

  onCreate(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.grid.create(this.grid.createFormRow, this.createConfirm);
  }

  onCancelCreate(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.grid.createFormShown = false;
    this.createCancel.emit({
      discardedData: this.grid.createFormRow.getNewData(),
      source: this.grid.source,
    });
  }

  ngOnChanges() {
    // we can assume that default settings have been applied and all values are defined
    this.createButtonContent = this.grid.settings.add!.createButtonContent!;
    this.cancelButtonContent = this.grid.settings.add!.cancelButtonContent!;
    this.bypassSecurityTrust = this.grid.settings.add?.sanitizer?.bypassHtml ? 'html' : 'none';
  }
}
