var Column = /** @class */ (function () {
    function Column(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    Column.prototype.getOnComponentInitFunction = function () {
        return this.onComponentInitFunction;
    };
    Column.prototype.getCompareFunction = function () {
        return this.compareFunction;
    };
    Column.prototype.getValuePrepareFunction = function () {
        return this.valuePrepareFunction;
    };
    Column.prototype.getFilterFunction = function () {
        return this.filterFunction;
    };
    Column.prototype.getConfig = function () {
        return this.editor && this.editor.config;
    };
    Column.prototype.getFilterType = function () {
        return this.filter && this.filter.type;
    };
    Column.prototype.getFilterConfig = function () {
        return this.filter && this.filter.config;
    };
    Column.prototype.process = function () {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    };
    Column.prototype.prepareType = function () {
        return this.settings['type'] || this.determineType();
    };
    Column.prototype.prepareSortDirection = function () {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    };
    Column.prototype.determineType = function () {
        // TODO: determine type by data
        return 'text';
    };
    return Column;
}());
export { Column };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFvQkUsZ0JBQW1CLEVBQVUsRUFBWSxRQUFhLEVBQVksT0FBZ0I7UUFBL0QsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBbEJsRixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQyxXQUFNLEdBQWtELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRyxXQUFNLEdBQWtELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNsRyxvQkFBZSxHQUFRLElBQUksQ0FBQztRQU8xQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDJDQUEwQixHQUExQjtRQUNFLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHdDQUF1QixHQUF2QjtR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SSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxxQ0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRUQsOEJBQWEsR0FBYjtRQUNFLCtCQUErQjtRQUMvQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUF2RkQsSUF1RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAnLi9kYXRhLXNldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uIHtcclxuXHJcbiAgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIHR5cGU6IHN0cmluZyA9ICcnO1xyXG4gIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuICB3aWR0aDogc3RyaW5nID0gJyc7XHJcbiAgaXNTb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGlzQWRkYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgaXNGaWx0ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgZGVmYXVsdFNvcnREaXJlY3Rpb246IHN0cmluZyA9ICcnO1xyXG4gIGVkaXRvcjogeyB0eXBlOiBzdHJpbmcsIGNvbmZpZzogYW55LCBjb21wb25lbnQ6IGFueSB9ID0geyB0eXBlOiAnJywgY29uZmlnOiB7fSwgY29tcG9uZW50OiBudWxsIH07XHJcbiAgZmlsdGVyOiB7IHR5cGU6IHN0cmluZywgY29uZmlnOiBhbnksIGNvbXBvbmVudDogYW55IH0gPSB7IHR5cGU6ICcnLCBjb25maWc6IHt9LCBjb21wb25lbnQ6IG51bGwgfTtcclxuICByZW5kZXJDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcbiAgY29tcGFyZUZ1bmN0aW9uOiBGdW5jdGlvbjtcclxuICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogRnVuY3Rpb247XHJcbiAgZmlsdGVyRnVuY3Rpb246IEZ1bmN0aW9uO1xyXG4gIG9uQ29tcG9uZW50SW5pdEZ1bmN0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHByb3RlY3RlZCBzZXR0aW5nczogYW55LCBwcm90ZWN0ZWQgZGF0YVNldDogRGF0YVNldCkge1xyXG4gICAgdGhpcy5wcm9jZXNzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRPbkNvbXBvbmVudEluaXRGdW5jdGlvbigpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vbkNvbXBvbmVudEluaXRGdW5jdGlvbjtcclxuICB9XHJcblxyXG4gIGdldENvbXBhcmVGdW5jdGlvbigpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlRnVuY3Rpb247XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZVByZXBhcmVGdW5jdGlvbigpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZVByZXBhcmVGdW5jdGlvbjtcclxuICB9XHJcblxyXG4gIGdldEZpbHRlckZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3IgJiYgdGhpcy5lZGl0b3IuY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyVHlwZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLnR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJDb25maWcoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5jb25maWc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLnNldHRpbmdzWyd0aXRsZSddO1xyXG4gICAgdGhpcy5jbGFzcyA9IHRoaXMuc2V0dGluZ3NbJ2NsYXNzJ107XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5zZXR0aW5nc1snd2lkdGgnXTtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMucHJlcGFyZVR5cGUoKTtcclxuICAgIHRoaXMuZWRpdG9yID0gdGhpcy5zZXR0aW5nc1snZWRpdG9yJ107XHJcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuc2V0dGluZ3NbJ2ZpbHRlciddO1xyXG4gICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSB0aGlzLnNldHRpbmdzWydyZW5kZXJDb21wb25lbnQnXTtcclxuXHJcbiAgICB0aGlzLmlzRmlsdGVyYWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydmaWx0ZXInXSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISF0aGlzLnNldHRpbmdzWydmaWx0ZXInXTtcclxuICAgIHRoaXMuZGVmYXVsdFNvcnREaXJlY3Rpb24gPSBbJ2FzYycsICdkZXNjJ11cclxuICAgICAgLmluZGV4T2YodGhpcy5zZXR0aW5nc1snc29ydERpcmVjdGlvbiddKSAhPT0gLTEgPyB0aGlzLnNldHRpbmdzWydzb3J0RGlyZWN0aW9uJ10gOiAnJztcclxuICAgIHRoaXMuaXNTb3J0YWJsZSA9IHR5cGVvZiB0aGlzLnNldHRpbmdzWydzb3J0J10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snc29ydCddO1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdHlwZW9mIHRoaXMuc2V0dGluZ3NbJ2VkaXRhYmxlJ10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snZWRpdGFibGUnXTtcclxuICAgIHRoaXMuaXNBZGRhYmxlPXR5cGVvZiB0aGlzLnNldHRpbmdzWydhZGRhYmxlJ10gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6ICEhdGhpcy5zZXR0aW5nc1snYWRkYWJsZSddO1xyXG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5wcmVwYXJlU29ydERpcmVjdGlvbigpO1xyXG5cclxuICAgIHRoaXMuY29tcGFyZUZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1snY29tcGFyZUZ1bmN0aW9uJ107XHJcbiAgICB0aGlzLnZhbHVlUHJlcGFyZUZ1bmN0aW9uID0gdGhpcy5zZXR0aW5nc1sndmFsdWVQcmVwYXJlRnVuY3Rpb24nXTtcclxuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gPSB0aGlzLnNldHRpbmdzWydmaWx0ZXJGdW5jdGlvbiddO1xyXG4gICAgdGhpcy5vbkNvbXBvbmVudEluaXRGdW5jdGlvbiA9IHRoaXMuc2V0dGluZ3NbJ29uQ29tcG9uZW50SW5pdEZ1bmN0aW9uJ107XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlVHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbJ3R5cGUnXSB8fCB0aGlzLmRldGVybWluZVR5cGUoKTtcclxuICB9XHJcblxyXG4gIHByZXBhcmVTb3J0RGlyZWN0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nc1snc29ydCddID09PSAnZGVzYycgPyAnZGVzYycgOiAnYXNjJztcclxuICB9XHJcblxyXG4gIGRldGVybWluZVR5cGUoKTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE86IGRldGVybWluZSB0eXBlIGJ5IGRhdGFcclxuICAgIHJldHVybiAndGV4dCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==