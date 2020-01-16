import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    FilterDefault.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Column)
    ], FilterDefault.prototype, "column", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", DataSource)
    ], FilterDefault.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], FilterDefault.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FilterDefault.prototype, "filter", void 0);
    return FilterDefault;
}());
export { FilterDefault };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9EO0lBQUE7UUFJVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLFVBQUssR0FBVyxFQUFFLENBQUM7SUFTckIsQ0FBQztJQVBDLGdDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBZFE7UUFBUixLQUFLLEVBQUU7MENBQVMsTUFBTTtpREFBQztJQUNmO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7aURBQUM7SUFDbkI7UUFBUixLQUFLLEVBQUU7O3FEQUF5QjtJQUV2QjtRQUFULE1BQU0sRUFBRTs7aURBQWtDO0lBVzdDLG9CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckRlZmF1bHQge1xyXG5cclxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcclxuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcXVlcnk6IHN0cmluZyA9ICcnO1xyXG5cclxuICBvbkZpbHRlcihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNvdXJjZS5hZGRGaWx0ZXIoe1xyXG4gICAgICBmaWVsZDogdGhpcy5jb2x1bW4uaWQsXHJcbiAgICAgIHNlYXJjaDogcXVlcnksXHJcbiAgICAgIGZpbHRlcjogdGhpcy5jb2x1bW4uZ2V0RmlsdGVyRnVuY3Rpb24oKSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=