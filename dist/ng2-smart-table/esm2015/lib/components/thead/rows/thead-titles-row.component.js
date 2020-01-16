import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
let TheadTitlesRowComponent = class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
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
        template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)" (onSortTable)="onSortTable.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `
    })
], TheadTitlesRowComponent);
export { TheadTitlesRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFvQmxFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBakJwQztRQXVCWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBWWxELENBQUM7SUFOQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBRUYsQ0FBQTtBQWxCVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJO3FEQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7OzhEQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTtzQ0FBUyxVQUFVO3VEQUFDO0FBRWxCO0lBQVQsTUFBTSxFQUFFOztxREFBZ0M7QUFDL0I7SUFBVCxNQUFNLEVBQUU7OzhEQUF5QztBQUN4QztJQUFULE1BQU0sRUFBRTs7NERBQXVDO0FBUnJDLHVCQUF1QjtJQWpCbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtLQUNGLENBQUM7R0FDVyx1QkFBdUIsQ0FvQm5DO1NBcEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC10aXRsZXMtcm93XScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx0aCBuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzQWxsU2VsZWN0ZWRdPVwiaXNBbGxTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MuZW1pdCgkZXZlbnQpXCI+XHJcbiAgICA8L3RoPlxyXG4gICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIiBbZ3JpZF09XCJncmlkXCI+PC90aD5cclxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdyaWQuZ2V0Q29sdW1ucygpXCIgY2xhc3M9XCJuZzItc21hcnQtdGgge3sgY29sdW1uLmlkIH19XCIgW25nQ2xhc3NdPVwiY29sdW1uLmNsYXNzXCJcclxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aFwiID5cclxuICAgICAgPG5nMi1zdC1jb2x1bW4tdGl0bGUgW3NvdXJjZV09XCJzb3VyY2VcIiBbY29sdW1uXT1cImNvbHVtblwiIChzb3J0KT1cInNvcnQuZW1pdCgkZXZlbnQpXCIgKG9uU29ydFRhYmxlKT1cIm9uU29ydFRhYmxlLmVtaXQoJGV2ZW50KVwiPjwvbmcyLXN0LWNvbHVtbi10aXRsZT5cclxuICAgIDwvdGg+XHJcbiAgICA8dGggbmcyLXN0LWFjdGlvbnMtdGl0bGUgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBbZ3JpZF09XCJncmlkXCI+PC90aD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xyXG4gIEBJbnB1dCgpIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG5cclxuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU29ydFRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XHJcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcclxuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=