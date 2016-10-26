export class ServerSourceConf {

  protected static readonly SORT_FIELD_KEY = '_sort';
  protected static readonly SORT_DIR_KEY = '_order';
  protected static readonly PAGER_PAGE_KEY = '_page';
  protected static readonly PAGER_LIMIT_KEY = '_limit';
  protected static readonly FILTER_FIELD_KEY = '#field#_like';
  protected static readonly TOTAL_KEY = 'x-total-count';

  endPoint: string;

  sortFieldKey: string;
  sortDirKey: string;
  pagerPageKey: string;
  pagerLimitKey: string;
  filterFieldKey: string;
  totalKey: string;

  constructor(
    {endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = ''} = {}) {

    this.endPoint = endPoint ? endPoint : '';

    this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
    this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
    this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
    this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
    this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
    this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
  }
}