import { EventEmitter } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
export declare class TbodyCustomComponent {
    grid: Grid;
    row: Row;
    source: any;
    custom: EventEmitter<any>;
    onCustom(action: any, event: any): void;
}
