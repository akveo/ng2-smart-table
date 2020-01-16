export declare class ServerSourceConf {
    protected static readonly SORT_FIELD_KEY = "_sort";
    protected static readonly SORT_DIR_KEY = "_order";
    protected static readonly PAGER_PAGE_KEY = "_page";
    protected static readonly PAGER_LIMIT_KEY = "_limit";
    protected static readonly FILTER_FIELD_KEY = "#field#_like";
    protected static readonly TOTAL_KEY = "x-total-count";
    protected static readonly DATA_KEY = "";
    endPoint: string;
    sortFieldKey: string;
    sortDirKey: string;
    pagerPageKey: string;
    pagerLimitKey: string;
    filterFieldKey: string;
    totalKey: string;
    dataKey: string;
    constructor({ endPoint, sortFieldKey, sortDirKey, pagerPageKey, pagerLimitKey, filterFieldKey, totalKey, dataKey }?: {
        endPoint?: string;
        sortFieldKey?: string;
        sortDirKey?: string;
        pagerPageKey?: string;
        pagerLimitKey?: string;
        filterFieldKey?: string;
        totalKey?: string;
        dataKey?: string;
    });
}
