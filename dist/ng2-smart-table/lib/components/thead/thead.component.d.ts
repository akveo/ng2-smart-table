import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
export declare class Ng2SmartTableTheadComponent implements OnChanges {
    grid: Grid;
    source: DataSource;
    isAllSelected: boolean;
    createConfirm: EventEmitter<any>;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
    onSortTable: EventEmitter<any>;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    ngOnChanges(): void;
}
