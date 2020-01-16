import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from '../../../lib/data-set/column';
export declare class DefaultFilter implements Filter, OnDestroy {
    delay: number;
    changesSubscription: Subscription;
    query: string;
    inputClass: string;
    column: Column;
    filter: EventEmitter<string>;
    ngOnDestroy(): void;
    setFilter(): void;
}
export interface Filter {
    delay?: number;
    changesSubscription?: Subscription;
    query: string;
    inputClass: string;
    column: Column;
    filter: EventEmitter<string>;
}
