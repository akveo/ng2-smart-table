import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
let Ng2SmartTableModule = class Ng2SmartTableModule {
};
Ng2SmartTableModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule,
        ],
        declarations: [
            Ng2SmartTableComponent,
        ],
        exports: [
            Ng2SmartTableComponent,
        ],
    })
], Ng2SmartTableModule);
export { Ng2SmartTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQW9CckUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FDL0IsQ0FBQTtBQURZLG1CQUFtQjtJQWxCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLFdBQVc7U0FDWjtRQUNELFlBQVksRUFBRTtZQUNaLHNCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLHNCQUFzQjtTQUN2QjtLQUNGLENBQUM7R0FDVyxtQkFBbUIsQ0FDL0I7U0FEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2VsbC9jZWxsLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBhZ2VyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRCb2R5TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rib2R5L3Rib2R5Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFRIZWFkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ2VsbE1vZHVsZSxcclxuICAgIEZpbHRlck1vZHVsZSxcclxuICAgIFBhZ2VyTW9kdWxlLFxyXG4gICAgVEJvZHlNb2R1bGUsXHJcbiAgICBUSGVhZE1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmcyU21hcnRUYWJsZUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVNb2R1bGUge1xyXG59XHJcbiJdfQ==