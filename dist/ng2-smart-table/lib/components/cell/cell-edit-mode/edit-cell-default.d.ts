import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export declare class EditCellDefault {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    onStopEditing(): boolean;
    onClick(event: any): void;
}
