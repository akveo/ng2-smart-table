import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Row} from '../../../lib/data-set/row';

import {Grid} from '../../../lib/grid';
import {CustomAction} from '../../../lib/settings';
import {CustomActionEvent} from '../../../lib/events';
import {SecurityTrustType} from "../../../pipes/bypass-security-trust.pipe";

@Component({
    selector: 'angular2-st-tbody-custom',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <ng-container *ngFor="let action of customActions">
          <a href="#" class="angular2-smart-action angular2-smart-action-custom-custom"
             *ngIf="!action.renderComponent && showAction(action)"
             [ngClass]="{'not-allowed': disableAction(action)}"
             [innerHTML]="buttonContent(action) | bypassSecurityTrust: bypassSecurityTrustFor(action)"
             (click)="onCustom(action, $event)"
          ></a>
          <a href="#" class="angular2-smart-action angular2-smart-action-custom-custom"
             *ngIf="action.renderComponent && showAction(action)"
             [ngClass]="{'not-allowed': disableAction(action)}"
             (click)="onCustom(action, $event)"
          >
              <angular2-st-tbody-custom-item
                      class="angular2-smart-action angular2-smart-action-custom-custom"
                      [action]="action"
                      [row]="row"
              ></angular2-st-tbody-custom-item>
          </a>
      </ng-container>
  `,
    standalone: false
})
export class TbodyCustomComponent {

  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() source: any;
  @Output() custom = new EventEmitter<CustomActionEvent>();

  get customActions(): CustomAction[] {
    if (this.grid.settings.actions === false) return [];
    return this.grid.settings.actions?.custom ?? [];
  }

  buttonContent(action: CustomAction): string {
    return action.customButtonContent ?? action.title ?? action.name;
  }

  bypassSecurityTrustFor(action: CustomAction): SecurityTrustType {
    return (action.sanitizer?.bypassHtml ?? false) ? 'html' : 'none';
  }

  showAction(action: CustomAction): boolean {
    return action.hiddenWhen === undefined || !action.hiddenWhen(this.row);
  }

  disableAction(action: CustomAction): boolean {
    return action.disabledWhen !== undefined && action.disabledWhen(this.row);
  }

  onCustom(action: CustomAction, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.custom.emit({
      action: action.name,
      row: this.row,
      data: this.row.getData(),
      source: this.source,
    });
  }
}
