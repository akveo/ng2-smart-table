import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
let AddButtonComponent = class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], AddButtonComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], AddButtonComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AddButtonComponent.prototype, "create", void 0);
AddButtonComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-add-button]',
        template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], AddButtonComponent);
export { AddButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFTbEUsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFTN0IsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFMekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFNM0MsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTlCVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJO2dEQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7c0NBQVMsVUFBVTtrREFBQztBQUNsQjtJQUFULE1BQU0sRUFBRTs7a0RBQWtDO0FBSmhDLGtCQUFrQjtJQVA5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRTs7O0dBR1Q7S0FDRixDQUFDOzZDQVV5QixVQUFVO0dBVHhCLGtCQUFrQixDQWdDOUI7U0FoQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtYWRkLWJ1dHRvbl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzQWN0aW9uQWRkXCIgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1hZGQtYWRkXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cImFkZE5ld0J1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25BZGQoJGV2ZW50KVwiPjwvYT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcclxuICBhZGROZXdCdXR0b25Db250ZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlJywgJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlLWFkZCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzQWN0aW9uQWRkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJyk7XHJcbiAgICB0aGlzLmFkZE5ld0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmFkZEJ1dHRvbkNvbnRlbnQnKTtcclxuICB9XHJcblxyXG4gIG9uQWRkKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlLmVtaXQoe1xyXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ncmlkLmNyZWF0ZUZvcm1TaG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==