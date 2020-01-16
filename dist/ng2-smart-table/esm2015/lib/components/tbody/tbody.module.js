import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
let TBodyModule = class TBodyModule {
};
TBodyModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            CellModule,
        ],
        declarations: [
            ...TBODY_COMPONENTS,
        ],
        exports: [
            ...TBODY_COMPONENTS,
        ],
    })
], TBodyModule);
export { TBodyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzVCLENBQUM7QUFlRixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUksQ0FBQTtBQUFmLFdBQVc7SUFidkIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxVQUFVO1NBQ1g7UUFDRCxZQUFZLEVBQUU7WUFDWixHQUFHLGdCQUFnQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLEdBQUcsZ0JBQWdCO1NBQ3BCO0tBQ0YsQ0FBQztHQUNXLFdBQVcsQ0FBSTtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudCB9IGZyb20gJy4vdGJvZHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGJvZHlFZGl0RGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9lZGl0LWRlbGV0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYm9keUN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY3VzdG9tLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBUQk9EWV9DT01QT05FTlRTID0gW1xyXG4gIFRib2R5Q3JlYXRlQ2FuY2VsQ29tcG9uZW50LFxyXG4gIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCxcclxuICBUYm9keUN1c3RvbUNvbXBvbmVudCxcclxuICBOZzJTbWFydFRhYmxlVGJvZHlDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBDZWxsTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5UQk9EWV9DT01QT05FTlRTLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uVEJPRFlfQ09NUE9ORU5UUyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVEJvZHlNb2R1bGUgeyB9XHJcbiJdfQ==