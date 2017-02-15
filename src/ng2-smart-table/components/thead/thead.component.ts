import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../lib/grid';

@Component({
    selector: '[ng2-st-thead]',
    templateUrl: './thead.component.html'
})
export class Ng2SmartTableTheadComponent {

    @Input() grid: Grid;
    @Input() source: any;
    @Input() isAllSelected: boolean;
    @Input() createConfirm: EventEmitter<any>;

    @Output() sort = new EventEmitter<any>();
    @Output() selectAllRows = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() filter = new EventEmitter<any>();
}
