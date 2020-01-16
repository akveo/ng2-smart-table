import { DataSet } from './data-set';
export declare class Column {
    id: string;
    protected settings: any;
    protected dataSet: DataSet;
    title: string;
    type: string;
    class: string;
    width: string;
    isSortable: boolean;
    isEditable: boolean;
    isAddable: boolean;
    isFilterable: boolean;
    sortDirection: string;
    defaultSortDirection: string;
    editor: {
        type: string;
        config: any;
        component: any;
    };
    filter: {
        type: string;
        config: any;
        component: any;
    };
    renderComponent: any;
    compareFunction: Function;
    valuePrepareFunction: Function;
    filterFunction: Function;
    onComponentInitFunction: Function;
    constructor(id: string, settings: any, dataSet: DataSet);
    getOnComponentInitFunction(): Function;
    getCompareFunction(): Function;
    getValuePrepareFunction(): Function;
    getFilterFunction(): Function;
    getConfig(): any;
    getFilterType(): any;
    getFilterConfig(): any;
    protected process(): void;
    prepareType(): string;
    prepareSortDirection(): string;
    determineType(): string;
}
