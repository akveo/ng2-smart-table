import * as tslib_1 from "tslib";
import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Cell)
    ], CustomViewComponent.prototype, "cell", void 0);
    tslib_1.__decorate([
        ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
        tslib_1.__metadata("design:type", Object)
    ], CustomViewComponent.prototype, "dynamicTarget", void 0);
    CustomViewComponent = tslib_1.__decorate([
        Component({
            selector: 'custom-view-component',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver])
    ], CustomViewComponent);
    return CustomViewComponent;
}());
export { CustomViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEdBR2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVNsRDtJQU1FLDZCQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUN0RCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFUyxtREFBcUIsR0FBL0I7UUFDRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVTLGlEQUFtQixHQUE3QjtRQUNFLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ25GLHVCQUF1QixJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVTLDJDQUFhLEdBQXZCO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRVMsc0NBQVEsR0FBbEI7UUFDRSxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRTtTQUN0QyxDQUFBO0lBQ0gsQ0FBQztJQXZDUTtRQUFSLEtBQUssRUFBRTswQ0FBTyxJQUFJO3FEQUFDO0lBQ2tEO1FBQXJFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs4REFBb0I7SUFKOUUsbUJBQW1CO1FBTi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLHNEQUVUO1NBQ0YsQ0FBQztpREFPOEIsd0JBQXdCO09BTjNDLG1CQUFtQixDQTJDL0I7SUFBRCwwQkFBQztDQUFBLEFBM0NELElBMkNDO1NBM0NZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuaW1wb3J0IHsgVmlld0NlbGwgfSBmcm9tICcuL3ZpZXctY2VsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2N1c3RvbS12aWV3LWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSAjZHluYW1pY1RhcmdldD48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcclxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xyXG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbXBvbmVudCgpO1xyXG4gICAgICB0aGlzLmNhbGxPbkNvbXBvbmVudEluaXQoKTtcclxuICAgICAgdGhpcy5wYXRjaEluc3RhbmNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlQ3VzdG9tQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jZWxsLmdldENvbHVtbigpLnJlbmRlckNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2FsbE9uQ29tcG9uZW50SW5pdCgpIHtcclxuICAgIGNvbnN0IG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmdldE9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uKCk7XHJcbiAgICBvbkNvbXBvbmVudEluaXRGdW5jdGlvbiAmJiBvbkNvbXBvbmVudEluaXRGdW5jdGlvbih0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcGF0Y2hJbnN0YW5jZSgpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UsIHRoaXMuZ2V0UGF0Y2goKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGF0Y2goKTogVmlld0NlbGwge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHRoaXMuY2VsbC5nZXRWYWx1ZSgpLFxyXG4gICAgICByb3dEYXRhOiB0aGlzLmNlbGwuZ2V0Um93KCkuZ2V0RGF0YSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==