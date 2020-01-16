import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
export declare class InputFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
