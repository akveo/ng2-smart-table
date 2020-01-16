import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
let TheadFormRowComponent = class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TheadFormRowComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], TheadFormRowComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TheadFormRowComponent.prototype, "createConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TheadFormRowComponent.prototype, "create", void 0);
TheadFormRowComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-thead-form-row]',
        template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `
    })
], TheadFormRowComponent);
export { TheadFormRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXdCaEQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUF0QmxDO1FBNEJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBbUI3QyxDQUFDO0lBWkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGLENBQUE7QUF2QlU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTttREFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFNLEdBQUc7a0RBQUM7QUFDVDtJQUFSLEtBQUssRUFBRTtzQ0FBZ0IsWUFBWTs0REFBTTtBQUVoQztJQUFULE1BQU0sRUFBRTs7cURBQWtDO0FBTmhDLHFCQUFxQjtJQXRCakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0F5QmpDO1NBekJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZvcm0tcm93XScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPHRkICpuZ0lmPVwiXCI+PC90ZD5cclxuICAgICAgPHRkICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cclxuICAgICAgICA8bmcyLXN0LWFjdGlvbnMgW2dyaWRdPVwiZ3JpZFwiIChjcmVhdGUpPVwib25DcmVhdGUoJGV2ZW50KVwiPjwvbmcyLXN0LWFjdGlvbnM+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBncmlkLmdldE5ld1JvdygpLmdldENlbGxzKClcIj5cclxuICAgICAgICA8bmcyLXNtYXJ0LXRhYmxlLWNlbGwgW2NlbGxdPVwiY2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNOZXddPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcmVhdGVDb25maXJtXT1cImNyZWF0ZUNvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJhZGRJbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzSW5FZGl0aW5nXT1cImdyaWQuZ2V0TmV3Um93KCkuaXNJbkVkaXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uQ3JlYXRlKCRldmVudClcIj5cclxuICAgICAgICA8L25nMi1zbWFydC10YWJsZS1jZWxsPlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQgICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cclxuICAgICAgICA8bmcyLXN0LWFjdGlvbnMgW2dyaWRdPVwiZ3JpZFwiIChjcmVhdGUpPVwib25DcmVhdGUoJGV2ZW50KVwiPjwvbmcyLXN0LWFjdGlvbnM+XHJcbiAgICAgIDwvdGQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZWFkRm9ybVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgcm93OiBSb3c7XHJcbiAgQElucHV0KCkgY3JlYXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xyXG4gIGFkZElucHV0Q2xhc3M6IHN0cmluZztcclxuXHJcbiAgb25DcmVhdGUoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5ncmlkLmNyZWF0ZSh0aGlzLmdyaWQuZ2V0TmV3Um93KCksIHRoaXMuY3JlYXRlQ29uZmlybSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpe1xyXG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xyXG4gICAgdGhpcy5hZGRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5pbnB1dENsYXNzJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==