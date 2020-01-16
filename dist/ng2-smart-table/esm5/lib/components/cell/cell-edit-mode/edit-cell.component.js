import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var EditCellComponent = /** @class */ (function () {
    function EditCellComponent() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    EditCellComponent.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Cell)
    ], EditCellComponent.prototype, "cell", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], EditCellComponent.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], EditCellComponent.prototype, "edited", void 0);
    EditCellComponent = tslib_1.__decorate([
        Component({
            selector: 'table-cell-edit-mode',
            template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
        })
    ], EditCellComponent);
    return EditCellComponent;
}());
export { EditCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFtQmxEO0lBakJBO1FBb0JXLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFVN0MsQ0FBQztJQVJDLG9DQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDO0lBWlE7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTttREFBQztJQUNYO1FBQVIsS0FBSyxFQUFFOzt5REFBeUI7SUFFdkI7UUFBVCxNQUFNLEVBQUU7O3FEQUFrQztJQUxoQyxpQkFBaUI7UUFqQjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLHdtQkFhUDtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FlN0I7SUFBRCx3QkFBQztDQUFBLEFBZkQsSUFlQztTQWZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLWVkaXQtbW9kZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZ2V0RWRpdG9yVHlwZSgpXCI+XHJcbiAgICAgICAgPHRhYmxlLWNlbGwtY3VzdG9tLWVkaXRvciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvdGFibGUtY2VsbC1jdXN0b20tZWRpdG9yPlxyXG4gICAgICAgIDx0YWJsZS1jZWxsLWRlZmF1bHQtZWRpdG9yICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIj5cclxuICAgICAgICA8L3RhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDZWxsQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvbkVkaXRlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmVkaXRlZC5uZXh0KGV2ZW50KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldEVkaXRvclR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IudHlwZTtcclxuICB9XHJcbn1cclxuIl19