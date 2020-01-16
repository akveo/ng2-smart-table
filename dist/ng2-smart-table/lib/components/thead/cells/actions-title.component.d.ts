import { AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
export declare class ActionsTitleComponent implements AfterViewInit, OnChanges {
    private ref;
    grid: Grid;
    actionsColumnTitle: string;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
}
