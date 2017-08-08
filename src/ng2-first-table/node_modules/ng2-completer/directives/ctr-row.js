import { Directive, ElementRef, Host, HostListener, Input, Renderer } from "@angular/core";
import { CtrDropdown, CtrRowItem } from "./ctr-dropdown";
var CtrRow = (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    CtrRow.prototype.ngOnDestroy = function () {
        if (this._rowIndex) {
            this.dropdown.unregisterRow(this._rowIndex);
        }
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: function (index) {
            this._rowIndex = index;
            this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    CtrRow.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    CtrRow.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    CtrRow.prototype.onMouseDown = function (event) {
        this.dropdown.rowMouseDown();
    };
    CtrRow.prototype.setHighlighted = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    CtrRow.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    CtrRow.prototype.getDataItem = function () {
        return this._item;
    };
    CtrRow.decorators = [
        { type: Directive, args: [{
                    selector: "[ctrRow]",
                },] },
    ];
    /** @nocollapse */
    CtrRow.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: CtrDropdown, decorators: [{ type: Host },] },
    ]; };
    CtrRow.propDecorators = {
        'ctrRow': [{ type: Input },],
        'dataItem': [{ type: Input },],
        'onClick': [{ type: HostListener, args: ["click", ["$event"],] },],
        'onMouseEnter': [{ type: HostListener, args: ["mouseenter", ["$event"],] },],
        'onMouseDown': [{ type: HostListener, args: ["mousedown", ["$event"],] },],
    };
    return CtrRow;
}());
export { CtrRow };
//# sourceMappingURL=ctr-row.js.map