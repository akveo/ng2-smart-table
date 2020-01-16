import * as tslib_1 from "tslib";
import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
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
    return DefaultFilter;
}());
export { DefaultFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXREO0lBQUE7UUFFRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBS1YsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFXaEQsQ0FBQztJQVRDLG1DQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBYlE7UUFBUixLQUFLLEVBQUU7O2dEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O3FEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTswQ0FBUyxNQUFNO2lEQUFDO0lBQ2Q7UUFBVCxNQUFNLEVBQUU7O2lEQUFxQztJQVdoRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBGaWx0ZXIsIE9uRGVzdHJveSB7XHJcblxyXG4gIGRlbGF5OiBudW1iZXIgPSAzMDA7XHJcbiAgY2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIHF1ZXJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xyXG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RmlsdGVyKCkge1xyXG4gICAgdGhpcy5maWx0ZXIuZW1pdCh0aGlzLnF1ZXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyIHtcclxuXHJcbiAgZGVsYXk/OiBudW1iZXI7XHJcbiAgY2hhbmdlc1N1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcclxuICBxdWVyeTogc3RyaW5nO1xyXG4gIGlucHV0Q2xhc3M6IHN0cmluZztcclxuICBjb2x1bW46IENvbHVtbjtcclxuICBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG59XHJcbiJdfQ==