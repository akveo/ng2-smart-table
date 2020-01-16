import { EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
export declare class CellComponent {
    grid: Grid;
    row: Row;
    editConfirm: EventEmitter<any>;
    createConfirm: EventEmitter<any>;
    isNew: boolean;
    cell: Cell;
    inputClass: string;
    mode: string;
    isInEditing: boolean;
    edited: EventEmitter<any>;
    onEdited(event: any): void;
}
