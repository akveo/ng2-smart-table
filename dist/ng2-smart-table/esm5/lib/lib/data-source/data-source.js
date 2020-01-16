import { Subject } from 'rxjs';
var DataSource = /** @class */ (function () {
    function DataSource() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    DataSource.prototype.refresh = function () {
        this.emitOnChanged('refresh');
    };
    DataSource.prototype.load = function (data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    };
    DataSource.prototype.onChanged = function () {
        return this.onChangedSource.asObservable();
    };
    DataSource.prototype.onAdded = function () {
        return this.onAddedSource.asObservable();
    };
    DataSource.prototype.onUpdated = function () {
        return this.onUpdatedSource.asObservable();
    };
    DataSource.prototype.onRemoved = function () {
        return this.onRemovedSource.asObservable();
    };
    DataSource.prototype.prepend = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    };
    DataSource.prototype.append = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    };
    DataSource.prototype.add = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    };
    DataSource.prototype.remove = function (element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    };
    DataSource.prototype.update = function (element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    };
    DataSource.prototype.empty = function () {
        this.emitOnChanged('empty');
        return Promise.resolve();
    };
    DataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    };
    DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    };
    DataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    };
    DataSource.prototype.emitOnRemoved = function (element) {
        this.onRemovedSource.next(element);
    };
    DataSource.prototype.emitOnUpdated = function (element) {
        this.onUpdatedSource.next(element);
    };
    DataSource.prototype.emitOnAdded = function (element) {
        this.onAddedSource.next(element);
    };
    DataSource.prototype.emitOnChanged = function (action) {
        var _this = this;
        this.getElements().then(function (elements) { return _this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: _this.getPaging(),
            filter: _this.getFilter(),
            sort: _this.getSort(),
        }); });
    };
    return DataSource;
}());
export { DataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0I7SUFBQTtRQUVZLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNyQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQXdIakQsQ0FBQztJQS9HQyw0QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQUksR0FBSixVQUFLLElBQWdCO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLE9BQVk7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx3QkFBRyxHQUFILFVBQUksT0FBWTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLE9BQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sT0FBWSxFQUFFLE1BQVc7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLElBQWdCLEVBQUUsTUFBZ0I7UUFDeEMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxJQUFnQixFQUFFLFdBQXFCLEVBQUUsTUFBZ0I7UUFDakUsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxTQUFhLEVBQUUsV0FBcUIsRUFBRSxNQUFnQjtRQUM5RCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxPQUFlLEVBQUUsTUFBZ0I7UUFDdkQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsTUFBZ0I7UUFDcEMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVTLGtDQUFhLEdBQXZCLFVBQXdCLE9BQVk7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLGtDQUFhLEdBQXZCLFVBQXdCLE9BQVk7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLGdDQUFXLEdBQXJCLFVBQXNCLE9BQVk7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVTLGtDQUFhLEdBQXZCLFVBQXdCLE1BQWM7UUFBdEMsaUJBUUM7UUFQQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDOUQsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRTtTQUNyQixDQUFDLEVBTm9DLENBTXBDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUE3SEQsSUE2SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU291cmNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIG9uQ2hhbmdlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcm90ZWN0ZWQgb25BZGRlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcm90ZWN0ZWQgb25VcGRhdGVkU291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByb3RlY3RlZCBvblJlbW92ZWRTb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIGFic3RyYWN0IGdldEFsbCgpOiBQcm9taXNlPGFueT47XHJcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudHMoKTogUHJvbWlzZTxhbnk+O1xyXG4gIGFic3RyYWN0IGdldFNvcnQoKTogYW55O1xyXG4gIGFic3RyYWN0IGdldEZpbHRlcigpOiBhbnk7XHJcbiAgYWJzdHJhY3QgZ2V0UGFnaW5nKCk6IGFueTtcclxuICBhYnN0cmFjdCBjb3VudCgpOiBudW1iZXI7XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3JlZnJlc2gnKTtcclxuICB9XHJcblxyXG4gIGxvYWQoZGF0YTogQXJyYXk8YW55Pik6IFByb21pc2U8YW55PiB7XHJcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2xvYWQnKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub25DaGFuZ2VkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgb25BZGRlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub25BZGRlZFNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIG9uVXBkYXRlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub25VcGRhdGVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vblJlbW92ZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwcmVwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0aGlzLmVtaXRPbkFkZGVkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdwcmVwZW5kJyk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMuZW1pdE9uQWRkZWQoZWxlbWVudCk7XHJcbiAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2FwcGVuZCcpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0aGlzLmVtaXRPbkFkZGVkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdhZGQnKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShlbGVtZW50OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdGhpcy5lbWl0T25SZW1vdmVkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdyZW1vdmUnKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShlbGVtZW50OiBhbnksIHZhbHVlczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMuZW1pdE9uVXBkYXRlZChlbGVtZW50KTtcclxuICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgndXBkYXRlJyk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBlbXB0eSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdGhpcy5lbWl0T25DaGFuZ2VkKCdlbXB0eScpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U29ydChjb25mOiBBcnJheTxhbnk+LCBkb0VtaXQ/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoZG9FbWl0KSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgnc29ydCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RmlsdGVyKGNvbmY6IEFycmF5PGFueT4sIGFuZE9wZXJhdG9yPzogYm9vbGVhbiwgZG9FbWl0PzogYm9vbGVhbikge1xyXG4gICAgaWYgKGRvRW1pdCkge1xyXG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2ZpbHRlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRmlsdGVyKGZpZWxkQ29uZjoge30sIGFuZE9wZXJhdG9yPzogYm9vbGVhbiwgZG9FbWl0PzogYm9vbGVhbikge1xyXG4gICAgaWYgKGRvRW1pdCkge1xyXG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ2ZpbHRlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGFnaW5nKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyLCBkb0VtaXQ/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoZG9FbWl0KSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uQ2hhbmdlZCgncGFnaW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQYWdlKHBhZ2U6IG51bWJlciwgZG9FbWl0PzogYm9vbGVhbikge1xyXG4gICAgaWYgKGRvRW1pdCkge1xyXG4gICAgICB0aGlzLmVtaXRPbkNoYW5nZWQoJ3BhZ2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0T25SZW1vdmVkKGVsZW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vblJlbW92ZWRTb3VyY2UubmV4dChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0T25VcGRhdGVkKGVsZW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vblVwZGF0ZWRTb3VyY2UubmV4dChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBlbWl0T25BZGRlZChlbGVtZW50OiBhbnkpIHtcclxuICAgIHRoaXMub25BZGRlZFNvdXJjZS5uZXh0KGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGVtaXRPbkNoYW5nZWQoYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ2V0RWxlbWVudHMoKS50aGVuKChlbGVtZW50cykgPT4gdGhpcy5vbkNoYW5nZWRTb3VyY2UubmV4dCh7XHJcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICBlbGVtZW50czogZWxlbWVudHMsXHJcbiAgICAgIHBhZ2luZzogdGhpcy5nZXRQYWdpbmcoKSxcclxuICAgICAgZmlsdGVyOiB0aGlzLmdldEZpbHRlcigpLFxyXG4gICAgICBzb3J0OiB0aGlzLmdldFNvcnQoKSxcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19