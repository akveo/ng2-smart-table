import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var InputEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputEditorComponent, _super);
    function InputEditorComponent() {
        return _super.call(this) || this;
    }
    InputEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'input-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InputEditorComponent);
    return InputEditorComponent;
}(DefaultEditor));
export { InputEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBaUJqRDtJQUEwQyxnREFBYTtJQUVyRDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUpVLG9CQUFvQjtRQWZoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUV4QixRQUFRLEVBQUUsaVpBVVA7O1NBQ0osQ0FBQzs7T0FDVyxvQkFBb0IsQ0FLaEM7SUFBRCwyQkFBQztDQUFBLEFBTEQsQ0FBMEMsYUFBYSxHQUt0RDtTQUxZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dC1lZGl0b3InLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXQgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcclxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcclxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcclxuICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxufVxyXG4iXX0=