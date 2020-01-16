import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class TbodyEditDeleteComponent implements OnChanges {
    grid: Grid;
    row: Row;
    source: DataSource;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    isActionEdit: boolean;
    isActionDelete: boolean;
    editRowButtonContent: string;
    deleteRowButtonContent: string;
    onEdit(event: any): void;
    onDelete(event: any): void;
    ngOnChanges(): void;
}
