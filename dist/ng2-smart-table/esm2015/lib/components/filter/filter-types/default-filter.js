import * as tslib_1 from "tslib";
import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
export class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DefaultFilter.prototype, "query", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DefaultFilter.prototype, "inputClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Column)
], DefaultFilter.prototype, "column", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DefaultFilter.prototype, "filter", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXRELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRUUsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUtWLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBV2hELENBQUM7SUFUQyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBZFU7SUFBUixLQUFLLEVBQUU7OzRDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7O2lEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTtzQ0FBUyxNQUFNOzZDQUFDO0FBQ2Q7SUFBVCxNQUFNLEVBQUU7OzZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIEZpbHRlciwgT25EZXN0cm95IHtcclxuXHJcbiAgZGVsYXk6IG51bWJlciA9IDMwMDtcclxuICBjaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgQElucHV0KCkgcXVlcnk6IHN0cmluZztcclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XHJcbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRGaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmZpbHRlci5lbWl0KHRoaXMucXVlcnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xyXG5cclxuICBkZWxheT86IG51bWJlcjtcclxuICBjaGFuZ2VzU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xyXG4gIHF1ZXJ5OiBzdHJpbmc7XHJcbiAgaW5wdXRDbGFzczogc3RyaW5nO1xyXG4gIGNvbHVtbjogQ29sdW1uO1xyXG4gIGZpbHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbn1cclxuIl19