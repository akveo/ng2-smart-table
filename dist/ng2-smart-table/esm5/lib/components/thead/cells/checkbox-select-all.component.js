import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], CheckboxSelectAllComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], CheckboxSelectAllComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
    CheckboxSelectAllComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-checkbox-select-all]',
            template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
        })
    ], CheckboxSelectAllComponent);
    return CheckboxSelectAllComponent;
}());
export { CheckboxSelectAllComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVFsRTtJQUFBO0lBS0EsQ0FBQztJQUhVO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7NERBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBUyxVQUFVOzhEQUFDO0lBQ25CO1FBQVIsS0FBSyxFQUFFOztxRUFBd0I7SUFKckIsMEJBQTBCO1FBTnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsUUFBUSxFQUFFLGlFQUVUO1NBQ0YsQ0FBQztPQUNXLDBCQUEwQixDQUt0QztJQUFELGlDQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW25nTW9kZWxdPVwiaXNBbGxTZWxlY3RlZFwiPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBJbnB1dCgpIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuIl19