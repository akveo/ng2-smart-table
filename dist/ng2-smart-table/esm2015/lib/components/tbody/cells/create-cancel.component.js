import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
let TbodyCreateCancelComponent = class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TbodyCreateCancelComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], TbodyCreateCancelComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
TbodyCreateCancelComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-st-tbody-create-cancel',
        template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `
    })
], TbodyCreateCancelComponent);
export { TbodyCreateCancelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9jcmVhdGUtY2FuY2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFXaEQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFTckMsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQzdFLENBQUM7Q0FDRixDQUFBO0FBekJVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7d0RBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTtzQ0FBTSxHQUFHO3VEQUFDO0FBQ1Q7SUFBUixLQUFLLEVBQUU7c0NBQWMsWUFBWTsrREFBTTtBQUo3QiwwQkFBMEI7SUFUdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxRQUFRLEVBQUU7Ozs7O0dBS1Q7S0FDRixDQUFDO0dBQ1csMEJBQTBCLENBMkJ0QztTQTNCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LXNhdmVcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic2F2ZUJ1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25TYXZlKCRldmVudClcIj48L2E+XHJcbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWVkaXQtY2FuY2VsXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cImNhbmNlbEJ1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25DYW5jZWxFZGl0KCRldmVudClcIj48L2E+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRib2R5Q3JlYXRlQ2FuY2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSByb3c6IFJvdztcclxuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcclxuICBzYXZlQnV0dG9uQ29udGVudDogc3RyaW5nO1xyXG5cclxuICBvblNhdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsRWRpdChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5yb3cuaXNJbkVkaXRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zYXZlQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LnNhdmVCdXR0b25Db250ZW50Jyk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5jYW5jZWxCdXR0b25Db250ZW50JylcclxuICB9XHJcbn1cclxuIl19