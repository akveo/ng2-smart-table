import { ComponentFactoryResolver, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
export declare class CustomEditComponent extends EditCellDefault implements OnChanges, OnDestroy {
    private resolver;
    customComponent: any;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
