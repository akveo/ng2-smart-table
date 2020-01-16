import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
var CustomEditComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEditComponent, _super);
    function CustomEditComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    CustomEditComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.cell && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
            this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
            this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
        }
    };
    CustomEditComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    tslib_1.__decorate([
        ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
        tslib_1.__metadata("design:type", Object)
    ], CustomEditComponent.prototype, "dynamicTarget", void 0);
    CustomEditComponent = tslib_1.__decorate([
        Component({
            selector: 'table-cell-custom-editor',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver])
    ], CustomEditComponent);
    return CustomEditComponent;
}(EditCellDefault));
export { CustomEditComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXQtbW9kZS9jdXN0b20tZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsR0FJakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBU3REO0lBQXlDLCtDQUFlO0lBS3RELDZCQUFvQixRQUFrQztRQUF0RCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsY0FBUSxHQUFSLFFBQVEsQ0FBMEI7O0lBRXRELENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFNUUsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBeEJxRTtRQUFyRSxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OERBQW9CO0lBSDlFLG1CQUFtQjtRQU4vQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxzREFFVDtTQUNGLENBQUM7aURBTThCLHdCQUF3QjtPQUwzQyxtQkFBbUIsQ0E0Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTVCRCxDQUF5QyxlQUFlLEdBNEJ2RDtTQTVCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRWRpdENlbGxEZWZhdWx0IH0gZnJvbSAnLi9lZGl0LWNlbGwtZGVmYXVsdCc7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtY3VzdG9tLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY1RhcmdldD48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21FZGl0Q29tcG9uZW50IGV4dGVuZHMgRWRpdENlbGxEZWZhdWx0IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcclxuICBAVmlld0NoaWxkKCdkeW5hbWljVGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgZHluYW1pY1RhcmdldDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLmNvbXBvbmVudCk7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5keW5hbWljVGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuXHJcbiAgICAgIC8vIHNldCBASW5wdXRzIGFuZCBAT3V0cHV0cyBvZiBjdXN0b20gY29tcG9uZW50XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLmNlbGwgPSB0aGlzLmNlbGw7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLmlucHV0Q2xhc3MgPSB0aGlzLmlucHV0Q2xhc3M7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uU3RvcEVkaXRpbmcuc3Vic2NyaWJlKCgpID0+IHRoaXMub25TdG9wRWRpdGluZygpKTtcclxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2Uub25FZGl0ZWQuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uRWRpdGVkKGV2ZW50KSk7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uQ2xpY2suc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50LmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19