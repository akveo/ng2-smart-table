import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
let TitleComponent = class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.onSortTable.emit({ column: this.column.id, direction: this.currentDirection });
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Column)
], TitleComponent.prototype, "column", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], TitleComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TitleComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TitleComponent.prototype, "onSortTable", void 0);
TitleComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table-title',
        template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
        styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
    })
], TitleComponent);
export { TitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZXpELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFiM0I7UUFlRSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFnRGxELENBQUM7SUE1Q0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO29CQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2lCQUM1QjtnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7Z0JBRXBDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7YUFDMUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFBO0FBbkRVO0lBQVIsS0FBSyxFQUFFO3NDQUFTLE1BQU07OENBQUM7QUFDZjtJQUFSLEtBQUssRUFBRTtzQ0FBUyxVQUFVOzhDQUFDO0FBQ2xCO0lBQVQsTUFBTSxFQUFFOzs0Q0FBZ0M7QUFDL0I7SUFBVCxNQUFNLEVBQUU7O21EQUF1QztBQU5yQyxjQUFjO0lBYjFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFFakMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUOztLQUNGLENBQUM7R0FDVyxjQUFjLENBc0QxQjtTQXREWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLXRpdGxlJyxcclxuICBzdHlsZVVybHM6IFsnLi90aXRsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiY29sdW1uLmlzU29ydGFibGVcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zb3J0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtc29ydC1saW5rIHNvcnRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiY3VycmVudERpcmVjdGlvblwiPlxyXG4gICAgICB7eyBjb2x1bW4udGl0bGUgfX1cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGNsYXNzPVwibmcyLXNtYXJ0LXNvcnRcIiAqbmdJZj1cIiFjb2x1bW4uaXNTb3J0YWJsZVwiPnt7IGNvbHVtbi50aXRsZSB9fTwvc3Bhbj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBjdXJyZW50RGlyZWN0aW9uID0gJyc7XHJcbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XHJcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU29ydFRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRDb25mID0gdGhpcy5zb3VyY2UuZ2V0U29ydCgpO1xyXG5cclxuICAgICAgICBpZiAoc29ydENvbmYubGVuZ3RoID4gMCAmJiBzb3J0Q29uZlswXVsnZmllbGQnXSA9PT0gdGhpcy5jb2x1bW4uaWQpIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHNvcnRDb25mWzBdWydkaXJlY3Rpb24nXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3J0Q29uZi5mb3JFYWNoKChmaWVsZENvbmY6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc29ydChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5jaGFuZ2VTb3J0RGlyZWN0aW9uKCk7XHJcbiAgICB0aGlzLm9uU29ydFRhYmxlLmVtaXQoeyBjb2x1bW46IHRoaXMuY29sdW1uLmlkLCBkaXJlY3Rpb246IHRoaXMuY3VycmVudERpcmVjdGlvbiB9KTtcclxuICAgIHRoaXMuc291cmNlLnNldFNvcnQoW1xyXG4gICAgICB7XHJcbiAgICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50RGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbXBhcmU6IHRoaXMuY29sdW1uLmdldENvbXBhcmVGdW5jdGlvbigpLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICB0aGlzLnNvcnQuZW1pdChudWxsKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnREaXJlY3Rpb24pIHtcclxuICAgICAgY29uc3QgbmV3RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSB0aGlzLmNvbHVtbi5zb3J0RGlyZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpcmVjdGlvbjtcclxuICB9XHJcbn1cclxuIl19