import { ElementRef, Renderer, OnDestroy } from "@angular/core";
import { CompleterItem } from "../components/completer-item";
import { CtrDropdown, CtrRowElement } from "./ctr-dropdown";
export declare class CtrRow implements CtrRowElement, OnDestroy {
    private el;
    private renderer;
    private dropdown;
    private selected;
    private _rowIndex;
    private _item;
    constructor(el: ElementRef, renderer: Renderer, dropdown: CtrDropdown);
    ngOnDestroy(): void;
    ctrRow: number;
    dataItem: CompleterItem;
    onClick(event: any): void;
    onMouseEnter(event: any): void;
    onMouseDown(event: any): void;
    setHighlighted(selected: boolean): void;
    getNativeElement(): any;
    getDataItem(): CompleterItem;
}
