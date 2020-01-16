import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
var ColumnTitleComponent = /** @class */ (function () {
    function ColumnTitleComponent() {
        this.sort = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Column)
    ], ColumnTitleComponent.prototype, "column", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], ColumnTitleComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnTitleComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ColumnTitleComponent.prototype, "onSortTable", void 0);
    ColumnTitleComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-st-column-title',
            template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\" (onSortTable)=\"onSortTable.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
        })
    ], ColumnTitleComponent);
    return ColumnTitleComponent;
}());
export { ColumnTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2NvbHVtbi10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVVsRTtJQVJBO1FBYVksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ2xELENBQUM7SUFMVTtRQUFSLEtBQUssRUFBRTswQ0FBUyxNQUFNO3dEQUFDO0lBQ2Y7UUFBUixLQUFLLEVBQUU7MENBQVMsVUFBVTt3REFBQztJQUVsQjtRQUFULE1BQU0sRUFBRTs7c0RBQWdDO0lBQy9CO1FBQVQsTUFBTSxFQUFFOzs2REFBdUM7SUFOckMsb0JBQW9CO1FBUmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDhOQUlUO1NBQ0YsQ0FBQztPQUNXLG9CQUFvQixDQU9oQztJQUFELDJCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXN0LWNvbHVtbi10aXRsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtdGl0bGVcIj5cclxuICAgICAgPG5nMi1zbWFydC10YWJsZS10aXRsZSBbc291cmNlXT1cInNvdXJjZVwiIFtjb2x1bW5dPVwiY29sdW1uXCIgKHNvcnQpPVwic29ydC5lbWl0KCRldmVudClcIiAob25Tb3J0VGFibGUpPVwib25Tb3J0VGFibGUuZW1pdCgkZXZlbnQpXCI+PC9uZzItc21hcnQtdGFibGUtdGl0bGU+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uVGl0bGVDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcblxyXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU29ydFRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbn1cclxuIl19