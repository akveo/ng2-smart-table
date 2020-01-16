import { DataSource } from '../data-source';
export declare class LocalDataSource extends DataSource {
    protected data: Array<any>;
    protected filteredAndSorted: Array<any>;
    protected sortConf: Array<any>;
    protected filterConf: any;
    protected pagingConf: any;
    constructor(data?: Array<any>);
    load(data: Array<any>): Promise<any>;
    prepend(element: any): Promise<any>;
    append(element: any): Promise<any>;
    add(element: any): Promise<any>;
    remove(element: any): Promise<any>;
    update(element: any, values: any): Promise<any>;
    find(element: any): Promise<any>;
    getElements(): Promise<any>;
    getFilteredAndSorted(): Promise<any>;
    getAll(): Promise<any>;
    reset(silent?: boolean): void;
    empty(): Promise<any>;
    count(): number;
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
    setSort(conf: Array<any>, doEmit?: boolean): LocalDataSource;
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
    setFilter(conf: Array<any>, andOperator?: boolean, doEmit?: boolean): LocalDataSource;
    addFilter(fieldConf: any, andOperator?: boolean, doEmit?: boolean): LocalDataSource;
    setPaging(page: number, perPage: number, doEmit?: boolean): LocalDataSource;
    setPage(page: number, doEmit?: boolean): LocalDataSource;
    getSort(): any;
    getFilter(): any;
    getPaging(): any;
    protected prepareData(data: Array<any>): Array<any>;
    protected sort(data: Array<any>): Array<any>;
    protected filter(data: Array<any>): Array<any>;
    protected paginate(data: Array<any>): Array<any>;
}
