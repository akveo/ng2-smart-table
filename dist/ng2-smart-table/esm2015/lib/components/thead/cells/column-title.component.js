import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
let ColumnTitleComponent = class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
};
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
        template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)" (onSortTable)="onSortTable.emit($event)"></ng2-smart-table-title>
    </div>
  `
    })
], ColumnTitleComponent);
export { ColumnTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2NvbHVtbi10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVVsRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVJqQztRQWFZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNsRCxDQUFDO0NBQUEsQ0FBQTtBQUxVO0lBQVIsS0FBSyxFQUFFO3NDQUFTLE1BQU07b0RBQUM7QUFDZjtJQUFSLEtBQUssRUFBRTtzQ0FBUyxVQUFVO29EQUFDO0FBRWxCO0lBQVQsTUFBTSxFQUFFOztrREFBZ0M7QUFDL0I7SUFBVCxNQUFNLEVBQUU7O3lEQUF1QztBQU5yQyxvQkFBb0I7SUFSaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUU7Ozs7R0FJVDtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0FPaEM7U0FQWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZzItc3QtY29sdW1uLXRpdGxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC10aXRsZVwiPlxyXG4gICAgICA8bmcyLXNtYXJ0LXRhYmxlLXRpdGxlIFtzb3VyY2VdPVwic291cmNlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiIChvblNvcnRUYWJsZSk9XCJvblNvcnRUYWJsZS5lbWl0KCRldmVudClcIj48L25nMi1zbWFydC10YWJsZS10aXRsZT5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5UaXRsZUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25Tb3J0VGFibGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxufVxyXG4iXX0=