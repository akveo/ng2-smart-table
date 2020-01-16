import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new EventEmitter();
    }
    TbodyCustomComponent.prototype.onCustom = function (action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TbodyCustomComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Row)
    ], TbodyCustomComponent.prototype, "row", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyCustomComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TbodyCustomComponent.prototype, "custom", void 0);
    TbodyCustomComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-st-tbody-custom',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
        })
    ], TbodyCustomComponent);
    return TbodyCustomComponent;
}());
export { TbodyCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2N1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVl6QztJQVZBO1FBZWMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhL0MsQ0FBQztJQVhHLHVDQUFRLEdBQVIsVUFBUyxNQUFXLEVBQUUsS0FBVTtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWRRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7c0RBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBTSxHQUFHO3FEQUFDO0lBQ1Q7UUFBUixLQUFLLEVBQUU7O3dEQUFhO0lBQ1g7UUFBVCxNQUFNLEVBQUU7O3dEQUFrQztJQUxsQyxvQkFBb0I7UUFWaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsNFBBS0w7U0FDUixDQUFDO09BQ1csb0JBQW9CLENBa0JoQztJQUFELDJCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktY3VzdG9tJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGEgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuY3VzdG9tJylcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b21cIiBcclxuICAgICAgICAgW2lubmVySFRNTF09XCJhY3Rpb24udGl0bGVcIlxyXG4gICAgICAgICAoY2xpY2spPVwib25DdXN0b20oYWN0aW9uLCAkZXZlbnQpXCI+PC9hPlxyXG4gICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRib2R5Q3VzdG9tQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gICAgQElucHV0KCkgcm93OiBSb3c7XHJcbiAgICBASW5wdXQoKSBzb3VyY2U6IGFueTtcclxuICAgIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBvbkN1c3RvbShhY3Rpb246IGFueSwgZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VzdG9tLmVtaXQoe1xyXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19