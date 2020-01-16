import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
let TbodyCustomComponent = class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
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
        template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
    })
], TbodyCustomComponent);
export { TbodyCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2N1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVl6QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVZqQztRQWVjLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYS9DLENBQUM7SUFYRyxRQUFRLENBQUMsTUFBVyxFQUFFLEtBQVU7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSixDQUFBO0FBaEJZO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7a0RBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTtzQ0FBTSxHQUFHO2lEQUFDO0FBQ1Q7SUFBUixLQUFLLEVBQUU7O29EQUFhO0FBQ1g7SUFBVCxNQUFNLEVBQUU7O29EQUFrQztBQUxsQyxvQkFBb0I7SUFWaEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxRQUFRLEVBQUU7Ozs7O1NBS0w7S0FDUixDQUFDO0dBQ1csb0JBQW9CLENBa0JoQztTQWxCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nMi1zdC10Ym9keS1jdXN0b20nLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8YSAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5jdXN0b20nKVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbVwiIFxyXG4gICAgICAgICBbaW5uZXJIVE1MXT1cImFjdGlvbi50aXRsZVwiXHJcbiAgICAgICAgIChjbGljayk9XCJvbkN1c3RvbShhY3Rpb24sICRldmVudClcIj48L2E+XHJcbiAgICAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGJvZHlDdXN0b21Db21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgICBASW5wdXQoKSByb3c6IFJvdztcclxuICAgIEBJbnB1dCgpIHNvdXJjZTogYW55O1xyXG4gICAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIG9uQ3VzdG9tKGFjdGlvbjogYW55LCBldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b20uZW1pdCh7XHJcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcclxuICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=