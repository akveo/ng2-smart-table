import { AfterViewInit, Directive, ElementRef, Host, HostListener, OnDestroy } from "@angular/core";

import { CompleterItem } from "../components/completer-item";
import { CtrCompleter, CompleterDropdown } from "./ctr-completer";
import { isNil } from "../globals";


export interface CtrRowElement {
    setHighlighted(selected: boolean): void;
    getNativeElement(): any;
    getDataItem(): CompleterItem;
}

export class CtrRowItem {
    constructor(public row: CtrRowElement, public index: number) { }
}

@Directive({
    selector: "[ctrDropdown]",
})
export class CtrDropdown implements CompleterDropdown, OnDestroy, AfterViewInit {

    private rows: CtrRowItem[] = [];
    private currHighlighted: CtrRowItem | undefined;
    private isScrollOn: boolean;
    private _rowMouseDown: boolean = false;

    constructor( @Host() private completer: CtrCompleter, private el: ElementRef) {
        this.completer.registerDropdown(this);
    }

    public ngOnDestroy() {
        this.completer.registerDropdown(null);
    }

    public ngAfterViewInit() {
        const css = getComputedStyle(this.el.nativeElement);
        const autoHighlightIndex = this.completer.autoHighlightIndex;

        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";
        if (autoHighlightIndex) {
            setTimeout(
                () => {
                    this.highlightRow(autoHighlightIndex);
                },
                0
            );
        }
    }

    @HostListener("mousedown", ["$event"]) public onMouseDown(event: any) {
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
            this.completer.cancelBlur(true);
            setTimeout(
                () => {
                    this.completer.cancelBlur(false);
                },
                0
            );
        } else {
            this._rowMouseDown = false;
        }
        
    }

    public registerRow(row: CtrRowItem) {
        const arrIndex = this.rows.findIndex(_row => _row.index === row.index);
        if (arrIndex >= 0) {
            this.rows[arrIndex] = row;
        } else {
            this.rows.push(row);
        }
    }

    public unregisterRow(rowIndex: number) {
        const arrIndex = this.rows.findIndex(_row => _row.index === rowIndex);
        this.rows.splice(arrIndex, 1);
        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
            this.highlightRow(null);
        }
    }

    public highlightRow(index: number | null) {
        const highlighted = this.rows.find(row => row.index === index);

        if (isNil(index) || index! < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(null);
            return;
        }

        if (!highlighted) {
            return;
        }

        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }

        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());

        if (this.isScrollOn && this.currHighlighted) {
            const rowTop = this.dropdownRowTop();

            if (!rowTop) {
                return;
            }

            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            } else {
                const row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop as string, 10)));
                    }
                }
            }
        }
    }

    public clear() {
        this.rows = [];
    }

    public onSelected(item: CompleterItem) {
        this.completer.onSelected(item);
    }

    public rowMouseDown() {
        this._rowMouseDown = true;
    }

    public selectCurrent() {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        } else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }

    }

    public nextRow() {
        let nextRowIndex = 0;

        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }

        this.highlightRow(nextRowIndex);
    }

    public prevRow() {
        let nextRowIndex = -1;

        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }

        this.highlightRow(nextRowIndex);
    }

    private dropdownScrollTopTo(offset: any) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }

    private dropdownRowTop() {
        if (!this.currHighlighted) {
            return;
        }

        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop as string, 10));
    }

    private dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight as string, 10);
    }

    private dropdownRowOffsetHeight(row: any) {
        let css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight +
            parseInt(css.marginTop as string, 10) + parseInt(css.marginBottom as string, 10);
    }
}
