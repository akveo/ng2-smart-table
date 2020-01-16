import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var EditCellDefault = /** @class */ (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    EditCellDefault.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellDefault.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    EditCellDefault.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Cell)
    ], EditCellDefault.prototype, "cell", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], EditCellDefault.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], EditCellDefault.prototype, "edited", void 0);
    return EditCellDefault;
}());
export { EditCellDefault };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC1kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxEO0lBQUE7UUFHVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBZTdDLENBQUM7SUFiQyxrQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxLQUFVO1FBQ2hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBakJRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7aURBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTs7dURBQXlCO0lBRXZCO1FBQVQsTUFBTSxFQUFFOzttREFBa0M7SUFlN0Msc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdENlbGxEZWZhdWx0IHtcclxuXHJcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvbkVkaXRlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmVkaXRlZC5uZXh0KGV2ZW50KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU3RvcEVkaXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNlbGwuZ2V0Um93KCkuaXNJbkVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==