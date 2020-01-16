import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var ViewCellComponent = /** @class */ (function () {
    function ViewCellComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Cell)
    ], ViewCellComponent.prototype, "cell", void 0);
    ViewCellComponent = tslib_1.__decorate([
        Component({
            selector: 'table-cell-view-mode',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
        })
    ], ViewCellComponent);
    return ViewCellComponent;
}());
export { ViewCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBYWxEO0lBQUE7SUFHQSxDQUFDO0lBRFU7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTttREFBQztJQUZULGlCQUFpQjtRQVg3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFFBQVEsRUFBRSxpVEFNUDtTQUNKLENBQUM7T0FDVyxpQkFBaUIsQ0FHN0I7SUFBRCx3QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtdmlldy1tb2RlJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwiY2VsbC5nZXRDb2x1bW4oKS50eXBlXCI+XHJcbiAgICAgICAgPGN1c3RvbS12aWV3LWNvbXBvbmVudCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIiBbY2VsbF09XCJjZWxsXCI+PC9jdXN0b20tdmlldy1jb21wb25lbnQ+XHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2h0bWwnXCIgW2lubmVySFRNTF09XCJjZWxsLmdldFZhbHVlKClcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQ+e3sgY2VsbC5nZXRWYWx1ZSgpIH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q2VsbENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XHJcbn1cclxuIl19