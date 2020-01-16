import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
var CompleterFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerContent = new Subject();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map(function (ev) { return (ev && ev.title) || ev || ''; }), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    };
    CompleterFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'completer-filter',
            template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [CompleterService])
    ], CompleterFilterComponent);
    return CompleterFilterComponent;
}(DefaultFilter));
export { CompleterFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZXpFO0lBQThDLG9EQUFhO0lBSXpELGtDQUFvQixnQkFBa0M7UUFBdEQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsc0JBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7SUFJdEMsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDN0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEVBQU8sSUFBSyxPQUFBLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLEVBQzlDLG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNwQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsK0VBQStFO1FBQy9FLGlHQUFpRztRQUNqRyxrQ0FBa0M7UUFDbEMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBaENVLHdCQUF3QjtRQWJwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSx3akJBU1Q7U0FDRixDQUFDO2lEQUtzQyxnQkFBZ0I7T0FKM0Msd0JBQXdCLENBaUNwQztJQUFELCtCQUFDO0NBQUEsQUFqQ0QsQ0FBOEMsYUFBYSxHQWlDMUQ7U0FqQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XHJcblxyXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBkZWJvdW5jZVRpbWUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29tcGxldGVyLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZzItY29tcGxldGVyIFsobmdNb2RlbCldPVwicXVlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaW5wdXRUZXh0Q2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgIFtkYXRhU2VydmljZV09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLmRhdGFTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgIFttaW5TZWFyY2hMZW5ndGhdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5taW5TZWFyY2hMZW5ndGggfHwgMFwiXHJcbiAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcclxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLnBsYWNlaG9sZGVyIHx8ICdTdGFydCB0eXBpbmcuLi4nXCJcclxuICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZCk9XCJjb21wbGV0ZXJDb250ZW50Lm5leHQoJGV2ZW50KVwiPlxyXG4gICAgPC9uZzItY29tcGxldGVyPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29tcGxldGVyQ29udGVudCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wbGV0ZXJTZXJ2aWNlOiBDb21wbGV0ZXJTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXI7XHJcbiAgICBjb25maWcuZGF0YVNlcnZpY2UgPSB0aGlzLmNvbXBsZXRlclNlcnZpY2UubG9jYWwoY29uZmlnLmRhdGEsIGNvbmZpZy5zZWFyY2hGaWVsZHMsIGNvbmZpZy50aXRsZUZpZWxkKTtcclxuICAgIGNvbmZpZy5kYXRhU2VydmljZS5kZXNjcmlwdGlvbkZpZWxkKGNvbmZpZy5kZXNjcmlwdGlvbkZpZWxkKTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLmNvbXBsZXRlckNvbnRlbnRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChldjogYW55KSA9PiAoZXYgJiYgZXYudGl0bGUpIHx8IGV2IHx8ICcnKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHNlYXJjaDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHNlYXJjaDtcclxuICAgICAgICB0aGlzLnNldEZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGlucHV0VGV4dENoYW5nZWQoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgLy8gd29ya2Fyb3VuZCB0byB0cmlnZ2VyIHRoZSBzZWFyY2ggZXZlbnQgd2hlbiB0aGUgaG9tZS9lbmQgYnV0dG9ucyBhcmUgY2xpY2tlZFxyXG4gICAgLy8gd2hlbiB0aGlzIGhhcHBlbnMgdGhlIFsobmdNb2RlbCldPVwicXVlcnlcIiBpcyBzZXQgdG8gXCJcIiBidXQgdGhlIChzZWxlY3RlZCkgbWV0aG9kIGlzIG5vdCBjYWxsZWRcclxuICAgIC8vIHNvIGhlcmUgaXQgZ2V0cyBjYWxsZWQgbWFudWFsbHlcclxuICAgIGlmIChldmVudCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZXJDb250ZW50Lm5leHQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=