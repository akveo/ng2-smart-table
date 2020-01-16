import { ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import { ViewCell } from './view-cell';
export declare class CustomViewComponent implements OnInit, OnDestroy {
    private resolver;
    customComponent: any;
    cell: Cell;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected createCustomComponent(): void;
    protected callOnComponentInit(): void;
    protected patchInstance(): void;
    protected getPatch(): ViewCell;
}
