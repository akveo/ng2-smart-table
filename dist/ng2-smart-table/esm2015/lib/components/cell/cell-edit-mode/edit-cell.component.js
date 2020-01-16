import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
let EditCellComponent = class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
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
        template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `
    })
], EditCellComponent);
export { EditCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFtQmxELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBakI5QjtRQW9CVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBVTdDLENBQUM7SUFSQyxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0UsQ0FBQztDQUNGLENBQUE7QUFiVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJOytDQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7O3FEQUF5QjtBQUV2QjtJQUFULE1BQU0sRUFBRTs7aURBQWtDO0FBTGhDLGlCQUFpQjtJQWpCN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7S0FhUDtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0FlN0I7U0FmWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1lZGl0LW1vZGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImdldEVkaXRvclR5cGUoKVwiPlxyXG4gICAgICAgIDx0YWJsZS1jZWxsLWN1c3RvbS1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIj5cclxuICAgICAgICA8L3RhYmxlLWNlbGwtY3VzdG9tLWVkaXRvcj5cclxuICAgICAgICA8dGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvciAqbmdTd2l0Y2hEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgPC90YWJsZS1jZWxsLWRlZmF1bHQtZWRpdG9yPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Q2VsbENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XHJcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgb25FZGl0ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5lZGl0ZWQubmV4dChldmVudCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRFZGl0b3JUeXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==