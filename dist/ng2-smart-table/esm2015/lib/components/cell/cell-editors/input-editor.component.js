import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
let InputEditorComponent = class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
InputEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'input-editor',
        template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], InputEditorComponent);
export { InputEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBaUJqRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGFBQWE7SUFFckQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBO0FBTFksb0JBQW9CO0lBZmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBRXhCLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVQOztLQUNKLENBQUM7O0dBQ1csb0JBQW9CLENBS2hDO1NBTFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lucHV0LWVkaXRvcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcclxuICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxyXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxyXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxyXG4gICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIj5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==