import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], Ng2SmartTableTheadComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "create", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "onSortTable", void 0);
    Ng2SmartTableTheadComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-thead]',
            template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\r\n                            class=\"ng2-smart-titles\"\r\n                            [grid]=\"grid\"\r\n                            [isAllSelected]=\"isAllSelected\"\r\n                            [source]=\"source\"\r\n                            (sort)=\"sort.emit($event)\"\r\n                            (onSortTable)=\"onSortTable.emit($event)\"\r\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\r\n                              class=\"ng2-smart-filters\"\r\n                              [grid]=\"grid\"\r\n                              [source]=\"source\"\r\n                              (create)=\"create.emit($event)\"\r\n                              (filter)=\"filter.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\r\n                          [grid]=\"grid\"\r\n                          [createConfirm]=\"createConfirm\">\r\n</tr>\r\n"
        })
    ], Ng2SmartTableTheadComponent);
    return Ng2SmartTableTheadComponent;
}());
export { Ng2SmartTableTheadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFNL0Q7SUFKQTtRQVdjLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFRcEQsQ0FBQztJQUpDLGlEQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTswQ0FBTyxJQUFJOzZEQUFDO0lBQ1g7UUFBUixLQUFLLEVBQUU7MENBQVMsVUFBVTsrREFBQztJQUNuQjtRQUFSLEtBQUssRUFBRTs7c0VBQXdCO0lBQ3ZCO1FBQVIsS0FBSyxFQUFFOzBDQUFnQixZQUFZO3NFQUFNO0lBRWhDO1FBQVQsTUFBTSxFQUFFOzs2REFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7O3NFQUF5QztJQUN4QztRQUFULE1BQU0sRUFBRTs7K0RBQWtDO0lBQ2pDO1FBQVQsTUFBTSxFQUFFOzsrREFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7O29FQUF1QztJQVh2QywyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixvaUNBQXFDO1NBQ3hDLENBQUM7T0FDVywyQkFBMkIsQ0FtQnZDO0lBQUQsa0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZF0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RoZWFkLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICAgIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuICAgIEBJbnB1dCgpIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBjcmVhdGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdEFsbFJvd3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBvblNvcnRUYWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xyXG4gICAgaXNIaWRlU3ViSGVhZGVyOiBib29sZWFuO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xyXG4gICAgICB0aGlzLmlzSGlkZVN1YkhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlU3ViSGVhZGVyJyk7XHJcbiAgICB9XHJcbn1cclxuIl19