import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var CheckboxEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxEditorComponent, _super);
    function CheckboxEditorComponent() {
        return _super.call(this) || this;
    }
    CheckboxEditorComponent.prototype.onChange = function (event) {
        var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    };
    CheckboxEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'checkbox-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CheckboxEditorComponent);
    return CheckboxEditorComponent;
}(DefaultEditor));
export { CheckboxEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2NoZWNrYm94LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0JqRDtJQUE2QyxtREFBYTtJQUV4RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELDBDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQU0sT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN0RyxJQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2pFLENBQUM7SUFWVSx1QkFBdUI7UUFkbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUUzQixRQUFRLEVBQUUsa1hBU1A7O1NBQ0osQ0FBQzs7T0FDVyx1QkFBdUIsQ0FXbkM7SUFBRCw4QkFBQztDQUFBLEFBWEQsQ0FBNkMsYUFBYSxHQVd6RDtTQVhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1lZGl0b3InLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXQgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcclxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcclxuICAgICAgICAgICBbY2hlY2tlZF09XCJjZWxsLmdldFZhbHVlKCkgPT0gKGNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCk/LnRydWUgfHwgdHJ1ZSlcIlxyXG4gICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgdHJ1ZVZhbCA9ICh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLnRydWUpIHx8IHRydWU7XHJcbiAgICBjb25zdCBmYWxzZVZhbCA9ICh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmZhbHNlKSB8fCBmYWxzZTtcclxuICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC5jaGVja2VkID8gdHJ1ZVZhbCA6IGZhbHNlVmFsO1xyXG4gIH1cclxufVxyXG4iXX0=