import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
export declare class TheadFormRowComponent implements OnChanges {
    grid: Grid;
    row: Row;
    createConfirm: EventEmitter<any>;
    create: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    addInputClass: string;
    onCreate(event: any): void;
    ngOnChanges(): void;
}
