import { OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
export declare class SelectFilterComponent extends DefaultFilter implements OnInit {
    inputControl: NgControl;
    constructor();
    ngOnInit(): void;
}
