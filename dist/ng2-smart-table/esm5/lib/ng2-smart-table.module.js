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
var Ng2SmartTableModule = /** @class */ (function () {
    function Ng2SmartTableModule() {
    }
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
    return Ng2SmartTableModule;
}());
export { Ng2SmartTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQW9CckU7SUFBQTtJQUNBLENBQUM7SUFEWSxtQkFBbUI7UUFsQi9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixVQUFVO2dCQUNWLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDWixzQkFBc0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asc0JBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQUMvQjtJQUFELDBCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBDZWxsTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NlbGwvY2VsbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGaWx0ZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQYWdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlci9wYWdlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUQm9keU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy90Ym9keS90Ym9keS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUSGVhZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy90aGVhZC90aGVhZC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIENlbGxNb2R1bGUsXHJcbiAgICBGaWx0ZXJNb2R1bGUsXHJcbiAgICBQYWdlck1vZHVsZSxcclxuICAgIFRCb2R5TW9kdWxlLFxyXG4gICAgVEhlYWRNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZzJTbWFydFRhYmxlQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlTW9kdWxlIHtcclxufVxyXG4iXX0=