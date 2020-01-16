import { EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class ColumnTitleComponent {
    column: Column;
    source: DataSource;
    sort: EventEmitter<any>;
    onSortTable: EventEmitter<any>;
}
