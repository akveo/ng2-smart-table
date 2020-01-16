import * as tslib_1 from "tslib";
import { LocalSorter } from './local.sorter';
import { LocalFilter } from './local.filter';
import { LocalPager } from './local.pager';
import { DataSource } from '../data-source';
import { deepExtend } from '../../helpers';
var LocalDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(LocalDataSource, _super);
    function LocalDataSource(data) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this) || this;
        _this.data = [];
        _this.filteredAndSorted = [];
        _this.sortConf = [];
        _this.filterConf = {
            filters: [],
            andOperator: true,
        };
        _this.pagingConf = {};
        _this.data = data;
        return _this;
    }
    LocalDataSource.prototype.load = function (data) {
        this.data = data;
        return _super.prototype.load.call(this, data);
    };
    LocalDataSource.prototype.prepend = function (element) {
        this.reset(true);
        this.data.unshift(element);
        return _super.prototype.prepend.call(this, element);
    };
    LocalDataSource.prototype.append = function (element) {
        this.reset(true);
        this.data.push(element);
        return _super.prototype.append.call(this, element);
    };
    LocalDataSource.prototype.add = function (element) {
        this.data.push(element);
        return _super.prototype.add.call(this, element);
    };
    LocalDataSource.prototype.remove = function (element) {
        this.data = this.data.filter(function (el) { return el !== element; });
        return _super.prototype.remove.call(this, element);
    };
    LocalDataSource.prototype.update = function (element, values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.find(element).then(function (found) {
                found = deepExtend(found, values);
                _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
    LocalDataSource.prototype.find = function (element) {
        var found = this.data.find(function (el) { return el === element; });
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    };
    LocalDataSource.prototype.getElements = function () {
        var data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    };
    LocalDataSource.prototype.getFilteredAndSorted = function () {
        var data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    };
    LocalDataSource.prototype.getAll = function () {
        var data = this.data.slice(0);
        return Promise.resolve(data);
    };
    LocalDataSource.prototype.reset = function (silent) {
        if (silent === void 0) { silent = false; }
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    };
    LocalDataSource.prototype.empty = function () {
        this.data = [];
        return _super.prototype.empty.call(this);
    };
    LocalDataSource.prototype.count = function () {
        return this.filteredAndSorted.length;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        if (conf !== null) {
            conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        _super.prototype.setSort.call(this, conf, doEmit);
        return this;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (conf && conf.length > 0) {
            conf.forEach(function (fieldConf) {
                _this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        var found = false;
        this.filterConf.filters.forEach(function (currentFieldConf, index) {
            if (currentFieldConf['field'] === fieldConf['field']) {
                _this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        _super.prototype.setPaging.call(this, page, perPage, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        _super.prototype.setPage.call(this, page, doEmit);
        return this;
    };
    LocalDataSource.prototype.getSort = function () {
        return this.sortConf;
    };
    LocalDataSource.prototype.getFilter = function () {
        return this.filterConf;
    };
    LocalDataSource.prototype.getPaging = function () {
        return this.pagingConf;
    };
    LocalDataSource.prototype.prepareData = function (data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    };
    LocalDataSource.prototype.sort = function (data) {
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    };
    // TODO: refactor?
    LocalDataSource.prototype.filter = function (data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                var mergedData_1 = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        mergedData_1 = mergedData_1.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData_1.filter(function (elem, pos, arr) {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    };
    LocalDataSource.prototype.paginate = function (data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    };
    return LocalDataSource;
}(DataSource));
export { LocalDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBcUMsMkNBQVU7SUFXN0MseUJBQVksSUFBcUI7UUFBckIscUJBQUEsRUFBQSxTQUFxQjtRQUFqQyxZQUNFLGlCQUFPLFNBR1I7UUFiUyxVQUFJLEdBQWUsRUFBRSxDQUFDO1FBQ3RCLHVCQUFpQixHQUFlLEVBQUUsQ0FBQztRQUNuQyxjQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQVE7WUFDMUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDO1FBQ1EsZ0JBQVUsR0FBUSxFQUFFLENBQUM7UUFLN0IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ25CLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBZ0I7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBTyxpQkFBTSxJQUFJLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsT0FBTyxpQkFBTSxPQUFPLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUFZO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEIsT0FBTyxpQkFBTSxNQUFNLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDZCQUFHLEdBQUgsVUFBSSxPQUFZO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEIsT0FBTyxpQkFBTSxHQUFHLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUFZO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBRW5ELE9BQU8saUJBQU0sTUFBTSxZQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBWSxFQUFFLE1BQVc7UUFBaEMsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUM1QixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDbEMsaUJBQU0sTUFBTSxhQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssT0FBWTtRQUNmLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLE9BQU8sRUFBZCxDQUFjLENBQUMsQ0FBQztRQUNuRCxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtRQUVELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4Q0FBb0IsR0FBcEI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDbEIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNoQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVmLE9BQU8saUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILGlDQUFPLEdBQVAsVUFBUSxJQUFnQixFQUFFLE1BQWE7UUFBYix1QkFBQSxFQUFBLGFBQWE7UUFDckMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBRWpCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtvQkFDeEUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2lCQUMzRDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7UUFFRCxpQkFBTSxPQUFPLFlBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSCxtQ0FBUyxHQUFULFVBQVUsSUFBZ0IsRUFBRSxXQUFrQixFQUFFLE1BQWE7UUFBN0QsaUJBZ0JDO1FBaEIyQiw0QkFBQSxFQUFBLGtCQUFrQjtRQUFFLHVCQUFBLEVBQUEsYUFBYTtRQUMzRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QixpQkFBTSxTQUFTLFlBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsU0FBYyxFQUFFLFdBQWtCLEVBQUUsTUFBc0I7UUFBcEUsaUJBa0JDO1FBbEJ5Qiw0QkFBQSxFQUFBLGtCQUFrQjtRQUFFLHVCQUFBLEVBQUEsYUFBc0I7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDckUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLGdCQUFxQixFQUFFLEtBQVU7WUFDaEUsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDM0MsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFDLGlCQUFNLFNBQVMsWUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQXNCO1FBQXRCLHVCQUFBLEVBQUEsYUFBc0I7UUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFckMsaUJBQU0sU0FBUyxZQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLElBQVksRUFBRSxNQUFzQjtRQUF0Qix1QkFBQSxFQUFBLGFBQXNCO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQy9CLGlCQUFNLE9BQU8sWUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRVMscUNBQVcsR0FBckIsVUFBc0IsSUFBZ0I7UUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFUyw4QkFBSSxHQUFkLFVBQWUsSUFBZ0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDOUIsSUFBSSxHQUFHLFdBQVc7cUJBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0I7SUFDUixnQ0FBTSxHQUFoQixVQUFpQixJQUFnQjtRQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQWM7b0JBQzdDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLElBQUksR0FBRyxXQUFXOzZCQUNmLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDL0U7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLFlBQVUsR0FBUSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQWM7b0JBQzdDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLFlBQVUsR0FBRyxZQUFVLENBQUMsTUFBTSxDQUFDLFdBQVc7NkJBQ3ZDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoRjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCwwQkFBMEI7Z0JBQzFCLElBQUksR0FBRyxZQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxFQUFFLEdBQVEsRUFBRSxHQUFRO29CQUNyRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFUyxrQ0FBUSxHQUFsQixVQUFtQixJQUFnQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVFLElBQUksR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN2RjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQW5RRCxDQUFxQyxVQUFVLEdBbVE5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsU29ydGVyIH0gZnJvbSAnLi9sb2NhbC5zb3J0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbEZpbHRlciB9IGZyb20gJy4vbG9jYWwuZmlsdGVyJztcclxuaW1wb3J0IHsgTG9jYWxQYWdlciB9IGZyb20gJy4vbG9jYWwucGFnZXInO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2UnO1xyXG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcblxyXG4gIHByb3RlY3RlZCBkYXRhOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJvdGVjdGVkIGZpbHRlcmVkQW5kU29ydGVkOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJvdGVjdGVkIHNvcnRDb25mOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJvdGVjdGVkIGZpbHRlckNvbmY6IGFueSA9IHtcclxuICAgIGZpbHRlcnM6IFtdLFxyXG4gICAgYW5kT3BlcmF0b3I6IHRydWUsXHJcbiAgfTtcclxuICBwcm90ZWN0ZWQgcGFnaW5nQ29uZjogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEFycmF5PGFueT4gPSBbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgbG9hZChkYXRhOiBBcnJheTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcblxyXG4gICAgcmV0dXJuIHN1cGVyLmxvYWQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcmVwZW5kKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG5cclxuICAgIHRoaXMuZGF0YS51bnNoaWZ0KGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5kYXRhLnB1c2goZWxlbWVudCk7XHJcbiAgICByZXR1cm4gc3VwZXIuYXBwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgYWRkKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0aGlzLmRhdGEucHVzaChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc3VwZXIuYWRkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGVsZW1lbnQ6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKGVsID0+IGVsICE9PSBlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc3VwZXIucmVtb3ZlKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGVsZW1lbnQ6IGFueSwgdmFsdWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5maW5kKGVsZW1lbnQpLnRoZW4oKGZvdW5kKSA9PiB7XHJcbiAgICAgICAgZm91bmQgPSBkZWVwRXh0ZW5kKGZvdW5kLCB2YWx1ZXMpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShmb3VuZCwgdmFsdWVzKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgIH0pLmNhdGNoKHJlamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbmQoZWxlbWVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5kYXRhLmZpbmQoZWwgPT4gZWwgPT09IGVsZW1lbnQpO1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm91bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0VsZW1lbnQgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZGF0YXNldCcpKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKDApO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnByZXBhcmVEYXRhKGRhdGEpKTtcclxuICB9XHJcblxyXG4gIGdldEZpbHRlcmVkQW5kU29ydGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5zbGljZSgwKTtcclxuICAgIHRoaXMucHJlcGFyZURhdGEoZGF0YSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZmlsdGVyZWRBbmRTb3J0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLnNsaWNlKDApO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHNpbGVudCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoc2lsZW50KSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQ29uZiA9IHtcclxuICAgICAgICBmaWx0ZXJzOiBbXSxcclxuICAgICAgICBhbmRPcGVyYXRvcjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zb3J0Q29uZiA9IFtdO1xyXG4gICAgICB0aGlzLnBhZ2luZ0NvbmZbJ3BhZ2UnXSA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEZpbHRlcihbXSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNldFNvcnQoW10sIGZhbHNlKTtcclxuICAgICAgdGhpcy5zZXRQYWdlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1wdHkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG5cclxuICAgIHJldHVybiBzdXBlci5lbXB0eSgpO1xyXG4gIH1cclxuXHJcbiAgY291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkQW5kU29ydGVkLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQXJyYXkgb2YgY29uZiBvYmplY3RzXHJcbiAgICogW1xyXG4gICAqICB7ZmllbGQ6IHN0cmluZywgZGlyZWN0aW9uOiBhc2N8ZGVzY3xudWxsLCBjb21wYXJlOiBGdW5jdGlvbnxudWxsfSxcclxuICAgKiBdXHJcbiAgICogQHBhcmFtIGNvbmZcclxuICAgKiBAcGFyYW0gZG9FbWl0XHJcbiAgICogQHJldHVybnMge0xvY2FsRGF0YVNvdXJjZX1cclxuICAgKi9cclxuICBzZXRTb3J0KGNvbmY6IEFycmF5PGFueT4sIGRvRW1pdCA9IHRydWUpOiBMb2NhbERhdGFTb3VyY2Uge1xyXG4gICAgaWYgKGNvbmYgIT09IG51bGwpIHtcclxuXHJcbiAgICAgIGNvbmYuZm9yRWFjaCgoZmllbGRDb25mKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaWVsZENvbmZbJ2ZpZWxkJ10gfHwgdHlwZW9mIGZpZWxkQ29uZlsnZGlyZWN0aW9uJ10gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnQgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zb3J0Q29uZiA9IGNvbmY7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuc2V0U29ydChjb25mLCBkb0VtaXQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEFycmF5IG9mIGNvbmYgb2JqZWN0c1xyXG4gICAqIFtcclxuICAgKiAge2ZpZWxkOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBmaWx0ZXI6IEZ1bmN0aW9ufG51bGx9LFxyXG4gICAqIF1cclxuICAgKiBAcGFyYW0gY29uZlxyXG4gICAqIEBwYXJhbSBhbmRPcGVyYXRvclxyXG4gICAqIEBwYXJhbSBkb0VtaXRcclxuICAgKiBAcmV0dXJucyB7TG9jYWxEYXRhU291cmNlfVxyXG4gICAqL1xyXG4gIHNldEZpbHRlcihjb25mOiBBcnJheTxhbnk+LCBhbmRPcGVyYXRvciA9IHRydWUsIGRvRW1pdCA9IHRydWUpOiBMb2NhbERhdGFTb3VyY2Uge1xyXG4gICAgaWYgKGNvbmYgJiYgY29uZi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbmYuZm9yRWFjaCgoZmllbGRDb25mKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRGaWx0ZXIoZmllbGRDb25mLCBhbmRPcGVyYXRvciwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQ29uZiA9IHtcclxuICAgICAgICBmaWx0ZXJzOiBbXSxcclxuICAgICAgICBhbmRPcGVyYXRvcjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlsdGVyQ29uZi5hbmRPcGVyYXRvciA9IGFuZE9wZXJhdG9yO1xyXG4gICAgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gPSAxO1xyXG5cclxuICAgIHN1cGVyLnNldEZpbHRlcihjb25mLCBhbmRPcGVyYXRvciwgZG9FbWl0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYWRkRmlsdGVyKGZpZWxkQ29uZjogYW55LCBhbmRPcGVyYXRvciA9IHRydWUsIGRvRW1pdDogYm9vbGVhbiA9IHRydWUpOiBMb2NhbERhdGFTb3VyY2Uge1xyXG4gICAgaWYgKCFmaWVsZENvbmZbJ2ZpZWxkJ10gfHwgdHlwZW9mIGZpZWxkQ29uZlsnc2VhcmNoJ10gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5maWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoY3VycmVudEZpZWxkQ29uZjogYW55LCBpbmRleDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50RmllbGRDb25mWydmaWVsZCddID09PSBmaWVsZENvbmZbJ2ZpZWxkJ10pIHtcclxuICAgICAgICB0aGlzLmZpbHRlckNvbmYuZmlsdGVyc1tpbmRleF0gPSBmaWVsZENvbmY7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgdGhpcy5maWx0ZXJDb25mLmZpbHRlcnMucHVzaChmaWVsZENvbmYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWx0ZXJDb25mLmFuZE9wZXJhdG9yID0gYW5kT3BlcmF0b3I7XHJcbiAgICBzdXBlci5hZGRGaWx0ZXIoZmllbGRDb25mLCBhbmRPcGVyYXRvciwgZG9FbWl0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFnaW5nKHBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyLCBkb0VtaXQ6IGJvb2xlYW4gPSB0cnVlKTogTG9jYWxEYXRhU291cmNlIHtcclxuICAgIHRoaXMucGFnaW5nQ29uZlsncGFnZSddID0gcGFnZTtcclxuICAgIHRoaXMucGFnaW5nQ29uZlsncGVyUGFnZSddID0gcGVyUGFnZTtcclxuXHJcbiAgICBzdXBlci5zZXRQYWdpbmcocGFnZSwgcGVyUGFnZSwgZG9FbWl0KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFnZShwYWdlOiBudW1iZXIsIGRvRW1pdDogYm9vbGVhbiA9IHRydWUpOiBMb2NhbERhdGFTb3VyY2Uge1xyXG4gICAgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gPSBwYWdlO1xyXG4gICAgc3VwZXIuc2V0UGFnZShwYWdlLCBkb0VtaXQpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRTb3J0KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0Q29uZjtcclxuICB9XHJcblxyXG4gIGdldEZpbHRlcigpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyQ29uZjtcclxuICB9XHJcblxyXG4gIGdldFBhZ2luZygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnaW5nQ29uZjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwcmVwYXJlRGF0YShkYXRhOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XHJcbiAgICBkYXRhID0gdGhpcy5maWx0ZXIoZGF0YSk7XHJcbiAgICBkYXRhID0gdGhpcy5zb3J0KGRhdGEpO1xyXG4gICAgdGhpcy5maWx0ZXJlZEFuZFNvcnRlZCA9IGRhdGEuc2xpY2UoMCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc29ydChkYXRhOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XHJcbiAgICBpZiAodGhpcy5zb3J0Q29uZikge1xyXG4gICAgICB0aGlzLnNvcnRDb25mLmZvckVhY2goKGZpZWxkQ29uZikgPT4ge1xyXG4gICAgICAgIGRhdGEgPSBMb2NhbFNvcnRlclxyXG4gICAgICAgICAgLnNvcnQoZGF0YSwgZmllbGRDb25mWydmaWVsZCddLCBmaWVsZENvbmZbJ2RpcmVjdGlvbiddLCBmaWVsZENvbmZbJ2NvbXBhcmUnXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiByZWZhY3Rvcj9cclxuICBwcm90ZWN0ZWQgZmlsdGVyKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcclxuICAgIGlmICh0aGlzLmZpbHRlckNvbmYuZmlsdGVycykge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJDb25mLmFuZE9wZXJhdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChmaWVsZENvbmZbJ3NlYXJjaCddLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IExvY2FsRmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlcihkYXRhLCBmaWVsZENvbmZbJ2ZpZWxkJ10sIGZpZWxkQ29uZlsnc2VhcmNoJ10sIGZpZWxkQ29uZlsnZmlsdGVyJ10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBtZXJnZWREYXRhOiBhbnkgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlckNvbmYuZmlsdGVycy5mb3JFYWNoKChmaWVsZENvbmY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGZpZWxkQ29uZlsnc2VhcmNoJ10ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZWREYXRhID0gbWVyZ2VkRGF0YS5jb25jYXQoTG9jYWxGaWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyKGRhdGEsIGZpZWxkQ29uZlsnZmllbGQnXSwgZmllbGRDb25mWydzZWFyY2gnXSwgZmllbGRDb25mWydmaWx0ZXInXSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlbW92ZSBub24gdW5pcXVlIGl0ZW1zXHJcbiAgICAgICAgZGF0YSA9IG1lcmdlZERhdGEuZmlsdGVyKChlbGVtOiBhbnksIHBvczogYW55LCBhcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsZW0pID09PSBwb3M7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHBhZ2luYXRlKGRhdGE6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcclxuICAgIGlmICh0aGlzLnBhZ2luZ0NvbmYgJiYgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gJiYgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10pIHtcclxuICAgICAgZGF0YSA9IExvY2FsUGFnZXIucGFnaW5hdGUoZGF0YSwgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10sIHRoaXMucGFnaW5nQ29uZlsncGVyUGFnZSddKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=