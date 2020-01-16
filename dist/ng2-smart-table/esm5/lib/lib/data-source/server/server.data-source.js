import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';
import { map } from 'rxjs/operators';
var ServerDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new ServerSourceConf(conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements()
            .pipe(map(function (res) {
            _this.lastRequestCount = _this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            return _this.data;
        })).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.body;
        var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        var httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    };
    ServerDataSource.prototype.createRequesParams = function () {
        var httpParams = new HttpParams();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    };
    ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
        var _this = this;
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
        var _this = this;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    };
    return ServerDataSource;
}(LocalDataSource));
export { ServerDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmRhdGEtc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9zZXJ2ZXIvc2VydmVyLmRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFBc0MsNENBQWU7SUFNbkQsMEJBQXNCLElBQWdCLEVBQUUsSUFBZ0M7UUFBaEMscUJBQUEsRUFBQSxTQUFnQztRQUF4RSxZQUNFLGlCQUFPLFNBT1I7UUFScUIsVUFBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFLckMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7U0FDdEc7O0lBQ0gsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFO2FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1gsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGtEQUF1QixHQUFqQyxVQUFrQyxHQUFRO1FBQ3hDLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUUvRixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsdUdBQ3dELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTywyQkFBd0IsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG1EQUF3QixHQUFsQyxVQUFtQyxHQUFRO1FBQ3pDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN6QixPQUFPLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFUywwQ0FBZSxHQUF6QjtRQUNFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFUyw2Q0FBa0IsR0FBNUI7UUFDRSxJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRWxDLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVMsK0NBQW9CLEdBQTlCLFVBQStCLFVBQXNCO1FBQXJELGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDOUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyRSxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdkYsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFUyxpREFBc0IsR0FBaEMsVUFBaUMsVUFBc0I7UUFBdkQsaUJBV0M7UUFUQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQWM7Z0JBQzdDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN2QixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNuSDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRVMsZ0RBQXFCLEdBQS9CLFVBQWdDLFVBQXNCO1FBRXBELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdFLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNsRjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUE1R0QsQ0FBc0MsZUFBZSxHQTRHcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuLi9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XHJcbmltcG9ydCB7IFNlcnZlclNvdXJjZUNvbmYgfSBmcm9tICcuL3NlcnZlci1zb3VyY2UuY29uZic7XHJcbmltcG9ydCB7IGdldERlZXBGcm9tT2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyRGF0YVNvdXJjZSBleHRlbmRzIExvY2FsRGF0YVNvdXJjZSB7XHJcblxyXG4gIHByb3RlY3RlZCBjb25mOiBTZXJ2ZXJTb3VyY2VDb25mO1xyXG5cclxuICBwcm90ZWN0ZWQgbGFzdFJlcXVlc3RDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsIGNvbmY6IFNlcnZlclNvdXJjZUNvbmYgfCB7fSA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY29uZiA9IG5ldyBTZXJ2ZXJTb3VyY2VDb25mKGNvbmYpO1xyXG5cclxuICAgIGlmICghdGhpcy5jb25mLmVuZFBvaW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXQgbGVhc3QgZW5kUG9pbnQgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYSBjb25maWd1cmF0aW9uIG9mIHRoZSBzZXJ2ZXIgZGF0YSBzb3VyY2UuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdFJlcXVlc3RDb3VudDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0RWxlbWVudHMoKVxyXG4gICAgICAucGlwZShtYXAocmVzID0+IHtcclxuICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0Q291bnQgPSB0aGlzLmV4dHJhY3RUb3RhbEZyb21SZXNwb25zZShyZXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZXh0cmFjdERhdGFGcm9tUmVzcG9uc2UocmVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgfSkpLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXh0cmFjdHMgYXJyYXkgb2YgZGF0YSBmcm9tIHNlcnZlciByZXNwb25zZVxyXG4gICAqIEBwYXJhbSByZXNcclxuICAgKiBAcmV0dXJucyB7YW55fVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBleHRyYWN0RGF0YUZyb21SZXNwb25zZShyZXM6IGFueSk6IEFycmF5PGFueT4ge1xyXG4gICAgY29uc3QgcmF3RGF0YSA9IHJlcy5ib2R5O1xyXG4gICAgY29uc3QgZGF0YSA9ICEhdGhpcy5jb25mLmRhdGFLZXkgPyBnZXREZWVwRnJvbU9iamVjdChyYXdEYXRhLCB0aGlzLmNvbmYuZGF0YUtleSwgW10pIDogcmF3RGF0YTtcclxuXHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgRGF0YSBtdXN0IGJlIGFuIGFycmF5LlxyXG4gICAgUGxlYXNlIGNoZWNrIHRoYXQgZGF0YSBleHRyYWN0ZWQgZnJvbSB0aGUgc2VydmVyIHJlc3BvbnNlIGJ5IHRoZSBrZXkgJyR7dGhpcy5jb25mLmRhdGFLZXl9JyBleGlzdHMgYW5kIGlzIGFycmF5LmApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXh0cmFjdHMgdG90YWwgcm93cyBjb3VudCBmcm9tIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgKiBMb29rcyBmb3IgdGhlIGNvdW50IGluIHRoZSBoZWRlcnMgZmlyc3QsIHRoZW4gaW4gdGhlIHJlc3BvbnNlIGJvZHlcclxuICAgKiBAcGFyYW0gcmVzXHJcbiAgICogQHJldHVybnMge2FueX1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZXh0cmFjdFRvdGFsRnJvbVJlc3BvbnNlKHJlczogYW55KTogbnVtYmVyIHtcclxuICAgIGlmIChyZXMuaGVhZGVycy5oYXModGhpcy5jb25mLnRvdGFsS2V5KSkge1xyXG4gICAgICByZXR1cm4gK3Jlcy5oZWFkZXJzLmdldCh0aGlzLmNvbmYudG90YWxLZXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmF3RGF0YSA9IHJlcy5ib2R5O1xyXG4gICAgICByZXR1cm4gZ2V0RGVlcEZyb21PYmplY3QocmF3RGF0YSwgdGhpcy5jb25mLnRvdGFsS2V5LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZXF1ZXN0RWxlbWVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBodHRwUGFyYW1zID0gdGhpcy5jcmVhdGVSZXF1ZXNQYXJhbXMoKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZi5lbmRQb2ludCwgeyBwYXJhbXM6IGh0dHBQYXJhbXMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlUmVxdWVzUGFyYW1zKCk6IEh0dHBQYXJhbXMge1xyXG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG5cclxuICAgIGh0dHBQYXJhbXMgPSB0aGlzLmFkZFNvcnRSZXF1ZXN0UGFyYW1zKGh0dHBQYXJhbXMpO1xyXG4gICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkRmlsdGVyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zKTtcclxuICAgIHJldHVybiB0aGlzLmFkZFBhZ2VyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhZGRTb3J0UmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zKTogSHR0cFBhcmFtcyB7XHJcbiAgICBpZiAodGhpcy5zb3J0Q29uZikge1xyXG4gICAgICB0aGlzLnNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZikgPT4ge1xyXG4gICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYuc29ydEZpZWxkS2V5LCBmaWVsZENvbmYuZmllbGQpO1xyXG4gICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYuc29ydERpcktleSwgZmllbGRDb25mLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkRmlsdGVyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zKTogSHR0cFBhcmFtcyB7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGZpZWxkQ29uZjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkQ29uZlsnc2VhcmNoJ10pIHtcclxuICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYuZmlsdGVyRmllbGRLZXkucmVwbGFjZSgnI2ZpZWxkIycsIGZpZWxkQ29uZlsnZmllbGQnXSksIGZpZWxkQ29uZlsnc2VhcmNoJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWRkUGFnZXJSZXF1ZXN0UGFyYW1zKGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMpOiBIdHRwUGFyYW1zIHtcclxuXHJcbiAgICBpZiAodGhpcy5wYWdpbmdDb25mICYmIHRoaXMucGFnaW5nQ29uZlsncGFnZSddICYmIHRoaXMucGFnaW5nQ29uZlsncGVyUGFnZSddKSB7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYucGFnZXJQYWdlS2V5LCB0aGlzLnBhZ2luZ0NvbmZbJ3BhZ2UnXSk7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYucGFnZXJMaW1pdEtleSwgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBodHRwUGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=