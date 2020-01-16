import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
let DefaultEditComponent = class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
};
DefaultEditComponent = tslib_1.__decorate([
    Component({
        selector: 'table-cell-default-editor',
        template: "<div [ngSwitch]=\"getEditorType()\">\r\n    <select-editor *ngSwitchCase=\"'list'\"\r\n                   [cell]=\"cell\"\r\n                   [inputClass]=\"inputClass\"\r\n                   (onClick)=\"onClick($event)\"\r\n                   (onEdited)=\"onEdited($event)\"\r\n                   (onStopEditing)=\"onStopEditing()\">\r\n    </select-editor>\r\n\r\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\r\n                     [cell]=\"cell\"\r\n                     [inputClass]=\"inputClass\"\r\n                     (onClick)=\"onClick($event)\"\r\n                     (onEdited)=\"onEdited($event)\"\r\n                     (onStopEditing)=\"onStopEditing()\">\r\n    </textarea-editor>\r\n\r\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\r\n                     [cell]=\"cell\"\r\n                     [inputClass]=\"inputClass\"\r\n                     (onClick)=\"onClick($event)\">\r\n    </checkbox-editor>\r\n\r\n    <completer-editor *ngSwitchCase=\"'completer'\"\r\n                      [cell]=\"cell\">\r\n    </completer-editor>\r\n\r\n    <input-editor *ngSwitchDefault\r\n                  [cell]=\"cell\"\r\n                  [inputClass]=\"inputClass\"\r\n                  (onClick)=\"onClick($event)\"\r\n                  (onEdited)=\"onEdited($event)\"\r\n                  (onStopEditing)=\"onStopEditing()\">\r\n    </input-editor>\r\n</div>"
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DefaultEditComponent);
export { DefaultEditComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdEQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxlQUFlO0lBRXZEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7Q0FDRixDQUFBO0FBVFksb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsdTNDQUE0QztLQUM3QyxDQUFDOztHQUNXLG9CQUFvQixDQVNoQztTQVRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRWRpdENlbGxEZWZhdWx0IH0gZnJvbSAnLi9lZGl0LWNlbGwtZGVmYXVsdCc7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWZhdWx0LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVkaXRDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q2VsbERlZmF1bHQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRFZGl0b3JUeXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==