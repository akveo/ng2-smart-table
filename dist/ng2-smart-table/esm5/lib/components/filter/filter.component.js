import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
var FilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterComponent, _super);
    function FilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.query = '';
        return _this;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-smart-table-filter',
            template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
        })
    ], FilterComponent);
    return FilterComponent;
}(FilterDefault));
export { FilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF5QmpEO0lBQXFDLDJDQUFhO0lBdEJsRDtRQUFBLHFFQWdEQztRQXpCQyxXQUFLLEdBQVcsRUFBRSxDQUFDOztJQXlCckIsQ0FBQztJQXRCQyxxQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBcUJDO1FBcEJDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBVztnQkFDbEUsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3ZFLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUVoQixrRkFBa0Y7b0JBQ2xGLHNHQUFzRztpQkFDdkc7cUJBQU0sSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzVFLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07d0JBQ3hDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTs0QkFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO3lCQUN2QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBekJVLGVBQWU7UUF0QjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFFbEMsUUFBUSxFQUFFLHUwQkFpQlA7O1NBQ0osQ0FBQztPQUNXLGVBQWUsQ0EwQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFCRCxDQUFxQyxhQUFhLEdBMEJqRDtTQTFCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsdGVyRGVmYXVsdCB9IGZyb20gJy4vZmlsdGVyLWRlZmF1bHQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLWZpbHRlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC1maWx0ZXJcIiAqbmdJZj1cImNvbHVtbi5pc0ZpbHRlcmFibGVcIiBbbmdTd2l0Y2hdPVwiY29sdW1uLmdldEZpbHRlclR5cGUoKVwiPlxyXG4gICAgICAgIDxjdXN0b20tdGFibGUtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvY3VzdG9tLXRhYmxlLWZpbHRlcj5cclxuICAgICAgICA8ZGVmYXVsdC10YWJsZS1maWx0ZXIgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvZGVmYXVsdC10YWJsZS1maWx0ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcclxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XHJcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJDb25mID0gdGhpcy5zb3VyY2UuZ2V0RmlsdGVyKCk7XHJcbiAgICAgICAgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucXVlcnkgPSAnJztcclxuXHJcbiAgICAgICAgICAvLyBhZGQgYSBjaGVjayBmb3IgZXhpc3RpbmcgZmlsdGVycyBhbiBzZXQgdGhlIHF1ZXJ5IGlmIG9uZSBleGlzdHMgZm9yIHRoaXMgY29sdW1uXHJcbiAgICAgICAgICAvLyB0aGlzIGNvdmVycyBpbnN0YW5jZXMgd2hlcmUgdGhlIGZpbHRlciBpcyBzZXQgYnkgdXNlciBjb2RlIHdoaWxlIG1haW50YWluaW5nIGV4aXN0aW5nIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoazogYW55LCB2OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGsuZmllbGQgPT0gdGhpcy5jb2x1bW4uaWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gay5zZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==