import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
let ActionsTitleComponent = class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], ActionsTitleComponent.prototype, "grid", void 0);
ActionsTitleComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-actions-title]',
        template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], ActionsTitleComponent);
export { ActionsTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQWlCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRekMsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFNaEMsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFDbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0YsQ0FBQTtBQWRVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7bURBQUM7QUFGVCxxQkFBcUI7SUFOakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUU7O0dBRVQ7S0FDRixDQUFDOzZDQU95QixVQUFVO0dBTnhCLHFCQUFxQixDQWdCakM7U0FoQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW25nMi1zdC1hY3Rpb25zLXRpdGxlXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtdGl0bGVcIj57eyBhY3Rpb25zQ29sdW1uVGl0bGUgfX08L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uc1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuXHJcbiAgYWN0aW9uc0NvbHVtblRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuYWN0aW9uc0NvbHVtblRpdGxlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuY29sdW1uVGl0bGUnKTtcclxuICB9XHJcbn1cclxuIl19