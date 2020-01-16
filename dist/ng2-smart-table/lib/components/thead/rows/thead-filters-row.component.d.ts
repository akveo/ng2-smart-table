import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class TheadFitlersRowComponent implements OnChanges {
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    filterInputClass: string;
    ngOnChanges(): void;
}
