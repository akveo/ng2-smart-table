import { ComponentFactoryResolver, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FilterDefault } from './filter-default';
export declare class CustomFilterComponent extends FilterDefault implements OnChanges, OnDestroy {
    private resolver;
    query: string;
    customComponent: any;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
