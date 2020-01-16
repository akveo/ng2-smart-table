import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TheadFitlersRowComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], TheadFitlersRowComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadFitlersRowComponent.prototype, "create", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadFitlersRowComponent.prototype, "filter", void 0);
    TheadFitlersRowComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-thead-filters-row]',
            template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  "
        })
    ], TheadFitlersRowComponent);
    return TheadFitlersRowComponent;
}());
export { TheadFitlersRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQXlCbEU7SUF0QkE7UUEyQlksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhN0MsQ0FBQztJQU5DLDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTswREFBQztJQUNYO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7NERBQUM7SUFFbEI7UUFBVCxNQUFNLEVBQUU7OzREQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7NERBQWtDO0lBTmhDLHdCQUF3QjtRQXRCcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsOHlCQWtCVDtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FtQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtZmlsdGVycy1yb3ddJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRoICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIj48L3RoPlxyXG4gICAgPHRoIG5nMi1zdC1hZGQtYnV0dG9uICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC90aD5cclxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdyaWQuZ2V0Q29sdW1ucygpXCIgY2xhc3M9XCJuZzItc21hcnQtdGgge3sgY29sdW1uLmlkIH19XCI+XHJcbiAgICAgIDxuZzItc21hcnQtdGFibGUtZmlsdGVyIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJmaWx0ZXJJbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJmaWx0ZXIuZW1pdCgkZXZlbnQpXCI+XHJcbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWZpbHRlcj5cclxuICAgIDwvdGg+XHJcbiAgICA8dGggbmcyLXN0LWFkZC1idXR0b24gKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIj5cclxuICAgIDwvdGg+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG5cclxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcclxuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcclxuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XHJcbiAgZmlsdGVySW5wdXRDbGFzczogc3RyaW5nO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcclxuICAgIHRoaXMuZmlsdGVySW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdmaWx0ZXIuaW5wdXRDbGFzcycpO1xyXG4gIH1cclxufVxyXG4iXX0=