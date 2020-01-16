import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], TheadTitlesRowComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], TheadTitlesRowComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "onSortTable", void 0);
    TheadTitlesRowComponent = tslib_1.__decorate([
        Component({
            selector: '[ng2-st-thead-titles-row]',
            template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\" (onSortTable)=\"onSortTable.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
        })
    ], TheadTitlesRowComponent);
    return TheadTitlesRowComponent;
}());
export { TheadTitlesRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFvQmxFO0lBakJBO1FBdUJZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFZbEQsQ0FBQztJQU5DLDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTt5REFBQztJQUNYO1FBQVIsS0FBSyxFQUFFOztrRUFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7MENBQVMsVUFBVTsyREFBQztJQUVsQjtRQUFULE1BQU0sRUFBRTs7eURBQWdDO0lBQy9CO1FBQVQsTUFBTSxFQUFFOztrRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7O2dFQUF1QztJQVJyQyx1QkFBdUI7UUFqQm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLHEwQkFhVDtTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FvQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtdGl0bGVzLXJvd10nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dGggbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGwgKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RBbGxSb3dzLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC90aD5cclxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XHJcbiAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBncmlkLmdldENvbHVtbnMoKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXRoIHt7IGNvbHVtbi5pZCB9fVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5jbGFzc1wiXHJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJjb2x1bW4ud2lkdGhcIiA+XHJcbiAgICAgIDxuZzItc3QtY29sdW1uLXRpdGxlIFtzb3VyY2VdPVwic291cmNlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiIChvblNvcnRUYWJsZSk9XCJvblNvcnRUYWJsZS5lbWl0KCRldmVudClcIj48L25nMi1zdC1jb2x1bW4tdGl0bGU+XHJcbiAgICA8L3RoPlxyXG4gICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcclxuICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcclxuXHJcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0QWxsUm93cyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblNvcnRUYWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xyXG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xyXG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xyXG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19