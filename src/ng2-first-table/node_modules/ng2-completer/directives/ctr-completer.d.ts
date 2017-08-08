import { EventEmitter } from "@angular/core";
import { CompleterItem } from "../components/completer-item";
export interface CompleterList {
    search(term: string): void;
    open(): void;
    isOpen(open: boolean): void;
    clear(): void;
}
export interface CompleterDropdown {
    clear(): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    highlightRow(index: number | null): void;
}
export declare class CtrCompleter {
    selected: EventEmitter<CompleterItem | null>;
    highlighted: EventEmitter<CompleterItem | null>;
    opened: EventEmitter<boolean>;
    dataSourceChange: EventEmitter<void>;
    private list;
    private dropdown;
    private _hasHighlighted;
    private _hasSelected;
    private _cancelBlur;
    private _isOpen;
    private _autoHighlightIndex;
    registerList(list: CompleterList): void;
    registerDropdown(dropdown: CompleterDropdown | null): void;
    onHighlighted(item: CompleterItem | null): void;
    onSelected(item: CompleterItem, clearList?: boolean): void;
    onDataSourceChange(): void;
    search(term: string): void;
    clear(): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    hasHighlighted(): boolean;
    cancelBlur(cancel: boolean): void;
    isCancelBlur(): boolean;
    open(): void;
    isOpen: boolean;
    autoHighlightIndex: number | null;
    readonly hasSelected: boolean;
}
