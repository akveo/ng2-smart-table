import { OnChanges, SimpleChanges } from '@angular/core';
import { FilterDefault } from './filter-default';
import { Subscription } from 'rxjs';
export declare class FilterComponent extends FilterDefault implements OnChanges {
    query: string;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
}
