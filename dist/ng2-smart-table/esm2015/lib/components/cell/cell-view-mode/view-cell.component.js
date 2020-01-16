import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
let ViewCellComponent = class ViewCellComponent {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Cell)
], ViewCellComponent.prototype, "cell", void 0);
ViewCellComponent = tslib_1.__decorate([
    Component({
        selector: 'table-cell-view-mode',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
    })
], ViewCellComponent);
export { ViewCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBYWxELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBRzdCLENBQUE7QUFEVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJOytDQUFDO0FBRlQsaUJBQWlCO0lBWDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsUUFBUSxFQUFFOzs7Ozs7S0FNUDtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0FHN0I7U0FIWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLXZpZXctbW9kZScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW25nU3dpdGNoXT1cImNlbGwuZ2V0Q29sdW1uKCkudHlwZVwiPlxyXG4gICAgICAgIDxjdXN0b20tdmlldy1jb21wb25lbnQgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCIgW2NlbGxdPVwiY2VsbFwiPjwvY3VzdG9tLXZpZXctY29tcG9uZW50PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiIFtpbm5lckhUTUxdPVwiY2VsbC5nZXRWYWx1ZSgpXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0Pnt7IGNlbGwuZ2V0VmFsdWUoKSB9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld0NlbGxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xyXG59XHJcbiJdfQ==