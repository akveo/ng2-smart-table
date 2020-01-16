import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
let Ng2SmartTableTbodyComponent = class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
Ng2SmartTableTbodyComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-tbody]',
        template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\r\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\r\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\r\n  </td>\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n  <td *ngFor=\"let cell of row.cells\">\r\n    <ng2-smart-table-cell [cell]=\"cell\"\r\n                          [grid]=\"grid\"\r\n                          [row]=\"row\"\r\n                          [isNew]=\"false\"\r\n                          [mode]=\"mode\"\r\n                          [editConfirm]=\"editConfirm\"\r\n                          [inputClass]=\"editInputClass\"\r\n                          [isInEditing]=\"row.isInEditing\">\r\n    </ng2-smart-table-cell>\r\n  </td>\r\n\r\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n</tr>\r\n\r\n<tr *ngIf=\"grid.getRows().length == 0\">\r\n  <td [attr.colspan]=\"tableColumnsCount\">\r\n    {{ noDataMessage }}\r\n  </td>\r\n</tr>\r\n",
        styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
    })
], Ng2SmartTableTbodyComponent);
export { Ng2SmartTableTbodyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRL0QsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFMeEM7UUFhWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUE0Qi9DLENBQUM7SUFoQkMsSUFBSSxpQkFBaUI7UUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGLENBQUE7QUEzQ1U7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTt5REFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFTLFVBQVU7MkRBQUM7QUFDbkI7SUFBUixLQUFLLEVBQUU7c0NBQWdCLFlBQVk7a0VBQU07QUFDakM7SUFBUixLQUFLLEVBQUU7c0NBQWMsWUFBWTtnRUFBTTtBQUMvQjtJQUFSLEtBQUssRUFBRTtzQ0FBbUIsUUFBUTtxRUFBQztBQUUxQjtJQUFULE1BQU0sRUFBRTs7eURBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOzsyREFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7O3lEQUFnQztBQUMvQjtJQUFULE1BQU0sRUFBRTs7MkRBQWtDO0FBQ2pDO0lBQVQsTUFBTSxFQUFFOzsyREFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7OzJEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTs7a0VBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOztrRUFBeUM7QUFDeEM7SUFBVCxNQUFNLEVBQUU7O3NFQUE2QztBQUM1QztJQUFULE1BQU0sRUFBRTs7NkRBQW9DO0FBakJsQywyQkFBMkI7SUFMdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUUxQiw4Z0dBQXFDOztLQUN0QyxDQUFDO0dBQ1csMkJBQTJCLENBNkN2QztTQTdDWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQge0NvbHVtbn0gZnJvbSBcIi4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW25nMi1zdC10Ym9keV0nLFxyXG4gIHN0eWxlVXJsczogWycuL3Rib2R5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rib2R5LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICBASW5wdXQoKSByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIHNhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdXNlclNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG11bHRpcGxlU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJvd0hvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xyXG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xyXG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcclxuICBtb2RlOiBzdHJpbmc7XHJcbiAgZWRpdElucHV0Q2xhc3M6IHN0cmluZztcclxuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcclxuICBpc0FjdGlvbkVkaXQ6IGJvb2xlYW47XHJcbiAgaXNBY3Rpb25EZWxldGU6IGJvb2xlYW47XHJcbiAgbm9EYXRhTWVzc2FnZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IHRhYmxlQ29sdW1uc0NvdW50KCkge1xyXG4gICAgY29uc3QgYWN0aW9uQ29sdW1ucyA9IHRoaXMuaXNBY3Rpb25BZGQgfHwgdGhpcy5pc0FjdGlvbkVkaXQgfHwgdGhpcy5pc0FjdGlvbkRlbGV0ZSA/IDEgOiAwO1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCkubGVuZ3RoICsgYWN0aW9uQ29sdW1ucztcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpO1xyXG4gICAgdGhpcy5lZGl0SW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmlucHV0Q2xhc3MnKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XHJcbiAgICB0aGlzLmlzQWN0aW9uQWRkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJyk7XHJcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKTtcclxuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5kZWxldGUnKTtcclxuICAgIHRoaXMubm9EYXRhTWVzc2FnZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdub0RhdGFNZXNzYWdlJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==