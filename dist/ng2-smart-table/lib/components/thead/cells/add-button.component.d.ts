import { EventEmitter, AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class AddButtonComponent implements AfterViewInit, OnChanges {
    private ref;
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    isActionAdd: boolean;
    addNewButtonContent: string;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    onAdd(event: any): void;
}
