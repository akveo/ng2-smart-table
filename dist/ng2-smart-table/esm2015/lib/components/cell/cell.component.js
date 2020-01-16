import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
let CellComponent = class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], CellComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], CellComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], CellComponent.prototype, "editConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], CellComponent.prototype, "createConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CellComponent.prototype, "isNew", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], CellComponent.prototype, "cell", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CellComponent.prototype, "edited", void 0);
CellComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table-cell',
        template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `
    })
], CellComponent);
export { CellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTdDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFWMUI7UUFrQlcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBUzdDLENBQUM7SUFQQyxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5CVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJOzJDQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7c0NBQU0sR0FBRzswQ0FBQztBQUNUO0lBQVIsS0FBSyxFQUFFO3NDQUFjLFlBQVk7a0RBQU07QUFDL0I7SUFBUixLQUFLLEVBQUU7c0NBQWdCLFlBQVk7b0RBQU07QUFDakM7SUFBUixLQUFLLEVBQUU7OzRDQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7MkNBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTs7aURBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzsyQ0FBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7O2tEQUE4QjtBQUU1QjtJQUFULE1BQU0sRUFBRTs7NkNBQWtDO0FBWmhDLGFBQWE7SUFWekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUU7Ozs7OztHQU1UO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FxQnpCO1NBckJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1jZWxsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRhYmxlLWNlbGwtdmlldy1tb2RlICpuZ0lmPVwiIWlzSW5FZGl0aW5nXCIgW2NlbGxdPVwiY2VsbFwiPjwvdGFibGUtY2VsbC12aWV3LW1vZGU+XHJcbiAgICA8dGFibGUtY2VsbC1lZGl0LW1vZGUgKm5nSWY9XCJpc0luRWRpdGluZ1wiIFtjZWxsXT1cImNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxyXG4gICAgPC90YWJsZS1jZWxsLWVkaXQtbW9kZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgcm93OiBSb3c7XHJcbiAgQElucHV0KCkgZWRpdENvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBJbnB1dCgpIGlzTmV3OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XHJcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2lubGluZSc7XHJcbiAgQElucHV0KCkgaXNJbkVkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvbkVkaXRlZChldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pc05ldykge1xyXG4gICAgICB0aGlzLmdyaWQuY3JlYXRlKHRoaXMuZ3JpZC5nZXROZXdSb3coKSwgdGhpcy5jcmVhdGVDb25maXJtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19