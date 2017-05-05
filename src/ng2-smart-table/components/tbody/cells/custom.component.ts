import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
    selector: 'ng2-st-tbody-custom',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <a *ngFor="let custom of grid.getSetting('custom')" href="#"
            class="ng2-smart-action ng2-smart-action-custom-custom" [innerHTML]="custom.buttonContent" (click)="onCustom(custom, $event)"></a>
        `
})
export class TbodyCustomComponent {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() source: any;
    @Output() custom = new EventEmitter<any>();

    onCustom(custom: any, event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.custom.emit({
            custom: custom,
            data: this.row.getData(),
            source: this.source
        });
    }

}
