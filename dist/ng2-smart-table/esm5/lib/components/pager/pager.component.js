import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this.page = _this.source.getPaging().page;
                _this.perPage = _this.source.getPaging().perPage;
                _this.currentPerPage = _this.perPage;
                _this.count = _this.source.count();
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(dataChanges);
                _this.initPages();
            });
        }
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page: page });
        return false;
    };
    PagerComponent.prototype.next = function () {
        return this.paginate(this.getPage() + 1);
    };
    PagerComponent.prototype.prev = function () {
        return this.paginate(this.getPage() - 1);
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    PagerComponent.prototype.onChangePerPage = function (event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], PagerComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], PagerComponent.prototype, "perPageSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], PagerComponent.prototype, "changePage", void 0);
    PagerComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-smart-table-pager',
            template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
        })
    ], PagerComponent);
    return PagerComponent;
}());
export { PagerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUE0RC9EO0lBMURBO1FBNkRXLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRXpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTXJDLFVBQUssR0FBVyxDQUFDLENBQUM7SUE4RzlCLENBQUM7SUF6R0Msb0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWtCQztRQWpCQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQVc7Z0JBQ2xFLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQyxJQUFJLEtBQUks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QXlIMUI7SUFBRCxxQkFBQztDQUFBLEFBekhELElBeUhDO1NBekhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1wYWdlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5hdiAqbmdJZj1cInNob3VsZFNob3coKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uIHBhZ2luYXRpb25cIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IDF9XCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cImdldFBhZ2UoKSA9PSAxID8gZmFsc2UgOiBwYWdpbmF0ZSgxKVwiIGFyaWEtbGFiZWw9XCJGaXJzdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5GaXJzdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmsgcGFnZS1saW5rLXByZXZcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IDEgPyBmYWxzZSA6IHByZXYoKVwiIGFyaWEtbGFiZWw9XCJQcmV2XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsdDs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXY8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1pdGVtIHBhZ2UtaXRlbVwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogZ2V0UGFnZSgpID09IHBhZ2V9XCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgZ2V0UGFnZXMoKVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiXHJcbiAgICAgICAgICAqbmdJZj1cImdldFBhZ2UoKSA9PSBwYWdlXCI+e3sgcGFnZSB9fSA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgIChjbGljayk9XCJwYWdpbmF0ZShwYWdlKVwiICpuZ0lmPVwiZ2V0UGFnZSgpICE9IHBhZ2VcIj57eyBwYWdlIH19PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpfVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGluayBwYWdlLWxpbmstbmV4dFwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID8gZmFsc2UgOiBuZXh0KClcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mZ3Q7PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IGdldExhc3QoKX1cIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtbGluayBwYWdlLWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogcGFnaW5hdGUoZ2V0TGFzdCgpKVwiIGFyaWEtbGFiZWw9XCJMYXN0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxhc3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgXHJcbiAgICA8bmF2ICpuZ0lmPVwicGVyUGFnZVNlbGVjdCAmJiBwZXJQYWdlU2VsZWN0Lmxlbmd0aCA+IDBcIiBjbGFzcz1cIm5nMi1zbWFydC1wYWdpbmF0aW9uLXBlci1wYWdlXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwZXItcGFnZVwiPlxyXG4gICAgICAgIFBlciBQYWdlOlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8c2VsZWN0IChjaGFuZ2UpPVwib25DaGFuZ2VQZXJQYWdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQZXJQYWdlXCIgaWQ9XCJwZXItcGFnZVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGVyUGFnZVNlbGVjdFwiIFt2YWx1ZV09XCJpdGVtXCI+e3sgaXRlbSB9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvbmF2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuICBASW5wdXQoKSBwZXJQYWdlU2VsZWN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjdXJyZW50UGVyUGFnZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgcGFnZXM6IEFycmF5PGFueT47XHJcbiAgcHJvdGVjdGVkIHBhZ2U6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJvdGVjdGVkIHBlclBhZ2U6IG51bWJlcjtcclxuXHJcbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xyXG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZTtcclxuICAgICAgICB0aGlzLnBlclBhZ2UgPSB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBlclBhZ2UgPSB0aGlzLnBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMuc291cmNlLmNvdW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQYWdlT3V0T2ZCb3VuY2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2Uuc2V0UGFnZSgtLXRoaXMucGFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NQYWdlQ2hhbmdlKGRhdGFDaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLmluaXRQYWdlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdlIGNoYW5nZSB0aGUgcGFnZSBoZXJlIGRlcGVuZGluZyBvbiB0aGUgYWN0aW9uIHBlcmZvcm1lZCBhZ2FpbnN0IGRhdGEgc291cmNlXHJcbiAgICogaWYgYSBuZXcgZWxlbWVudCB3YXMgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGUgLSB0aGVuIGNoYW5nZSB0aGUgcGFnZSB0byB0aGUgbGFzdFxyXG4gICAqIGlmIGEgbmV3IGVsZW1lbnQgd2FzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHRhYmxlIC0gdGhlbiB0byB0aGUgZmlyc3QgcGFnZVxyXG4gICAqIEBwYXJhbSBjaGFuZ2VzXHJcbiAgICovXHJcbiAgcHJvY2Vzc1BhZ2VDaGFuZ2UoY2hhbmdlczogYW55KSB7XHJcbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdwcmVwZW5kJykge1xyXG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAnYXBwZW5kJykge1xyXG4gICAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHRoaXMuZ2V0TGFzdCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3VsZFNob3coKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuY291bnQoKSA+IHRoaXMucGVyUGFnZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnZShwYWdlKTtcclxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICB0aGlzLmNoYW5nZVBhZ2UuZW1pdCh7IHBhZ2UgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUodGhpcy5nZXRQYWdlKCkgKyAxKTtcclxuICB9XHJcblxyXG4gIHByZXYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSh0aGlzLmdldFBhZ2UoKSAtIDEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZXM7XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuY291bnQgLyB0aGlzLnBlclBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgaXNQYWdlT3V0T2ZCb3VuY2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHRoaXMucGFnZSAqIHRoaXMucGVyUGFnZSkgPj0gKHRoaXMuY291bnQgKyB0aGlzLnBlclBhZ2UpICYmIHRoaXMucGFnZSA+IDE7XHJcbiAgfVxyXG5cclxuICBpbml0UGFnZXMoKSB7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gdGhpcy5nZXRMYXN0KCk7XHJcbiAgICBsZXQgc2hvd1BhZ2VzQ291bnQgPSA0O1xyXG4gICAgc2hvd1BhZ2VzQ291bnQgPSBwYWdlc0NvdW50IDwgc2hvd1BhZ2VzQ291bnQgPyBwYWdlc0NvdW50IDogc2hvd1BhZ2VzQ291bnQ7XHJcbiAgICB0aGlzLnBhZ2VzID0gW107XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvdygpKSB7XHJcblxyXG4gICAgICBsZXQgbWlkZGxlT25lID0gTWF0aC5jZWlsKHNob3dQYWdlc0NvdW50IC8gMik7XHJcbiAgICAgIG1pZGRsZU9uZSA9IHRoaXMucGFnZSA+PSBtaWRkbGVPbmUgPyB0aGlzLnBhZ2UgOiBtaWRkbGVPbmU7XHJcblxyXG4gICAgICBsZXQgbGFzdE9uZSA9IG1pZGRsZU9uZSArIE1hdGguZmxvb3Ioc2hvd1BhZ2VzQ291bnQgLyAyKTtcclxuICAgICAgbGFzdE9uZSA9IGxhc3RPbmUgPj0gcGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBsYXN0T25lO1xyXG5cclxuICAgICAgY29uc3QgZmlyc3RPbmUgPSBsYXN0T25lIC0gc2hvd1BhZ2VzQ291bnQgKyAxO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IGZpcnN0T25lOyBpIDw9IGxhc3RPbmU7IGkrKykge1xyXG4gICAgICAgIHRoaXMucGFnZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VQZXJQYWdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRQZXJQYWdlKSB7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY3VycmVudFBlclBhZ2UgPT09ICdzdHJpbmcnICYmIHRoaXMuY3VycmVudFBlclBhZ2UudG9Mb3dlckNhc2UoKSA9PT0gJ2FsbCcpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlID0gdGhpcy5jdXJyZW50UGVyUGFnZSAqIDE7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=