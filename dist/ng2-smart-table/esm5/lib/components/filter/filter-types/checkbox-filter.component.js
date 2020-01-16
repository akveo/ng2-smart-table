import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import { debounceTime } from 'rxjs/operators';
var CheckboxFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxFilterComponent, _super);
    function CheckboxFilterComponent() {
        var _this = _super.call(this) || this;
        _this.filterActive = false;
        _this.inputControl = new FormControl();
        return _this;
    }
    CheckboxFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe(function (checked) {
            _this.filterActive = true;
            var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
            var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
            _this.query = checked ? trueVal : falseVal;
            _this.setFilter();
        });
    };
    CheckboxFilterComponent.prototype.resetFilter = function (event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    };
    CheckboxFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'checkbox-filter',
            template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CheckboxFilterComponent);
    return CheckboxFilterComponent;
}(DefaultFilter));
export { CheckboxFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVU5QztJQUE2QyxtREFBYTtJQUt4RDtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQUxELGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7SUFJakMsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsT0FBZ0I7WUFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQzlGLElBQU0sUUFBUSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNqRyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQTNCVSx1QkFBdUI7UUFSbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsc1FBSVQ7U0FDRixDQUFDOztPQUNXLHVCQUF1QixDQTRCbkM7SUFBRCw4QkFBQztDQUFBLEFBNUJELENBQTZDLGFBQWEsR0E0QnpEO1NBNUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZGVmYXVsdC1maWx0ZXInO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NoZWNrYm94LWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbZm9ybUNvbnRyb2xdPVwiaW5wdXRDb250cm9sXCIgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiZmlsdGVyQWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZXNldEZpbHRlcigkZXZlbnQpXCI+e3tjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCk/LnJlc2V0VGV4dCB8fCAncmVzZXQnfX08L2E+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGZpbHRlckFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlucHV0Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWxheSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVZhbCA9ICh0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKSAmJiB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS50cnVlKSB8fCB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGZhbHNlVmFsID0gKHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpICYmIHRoaXMuY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmZhbHNlKSB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gY2hlY2tlZCA/IHRydWVWYWwgOiBmYWxzZVZhbDtcclxuICAgICAgICB0aGlzLnNldEZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0RmlsdGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcbiAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZShmYWxzZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xyXG4gICAgdGhpcy5maWx0ZXJBY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0RmlsdGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==