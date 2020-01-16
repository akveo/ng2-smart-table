import { EventEmitter } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
export declare class FilterDefault {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    onFilter(query: string): void;
}
