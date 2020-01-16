var LocalPager = /** @class */ (function () {
    function LocalPager() {
    }
    LocalPager.paginate = function (data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    };
    return LocalPager;
}());
export { LocalPager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwucGFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLnBhZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7SUFLQSxDQUFDO0lBSFEsbUJBQVEsR0FBZixVQUFnQixJQUFnQixFQUFFLElBQVksRUFBRSxPQUFlO1FBQzdELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxJQUtDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvY2FsUGFnZXIge1xyXG5cclxuICBzdGF0aWMgcGFnaW5hdGUoZGF0YTogQXJyYXk8YW55PiwgcGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpOiBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiBkYXRhLnNsaWNlKHBlclBhZ2UgKiAocGFnZSAtIDEpLCBwZXJQYWdlICogcGFnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==