import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export declare class EditCellComponent {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    getEditorType(): string;
}
