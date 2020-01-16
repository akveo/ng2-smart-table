import { Row } from './row';
import { Column } from './column';
export declare class DataSet {
    protected columnSettings: Object;
    newRow: Row;
    protected data: Array<any>;
    protected columns: Array<Column>;
    protected rows: Array<Row>;
    protected selectedRow: Row;
    protected willSelect: string;
    constructor(data: Array<any>, columnSettings: Object);
    setData(data: Array<any>): void;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    getFirstRow(): Row;
    getLastRow(): Row;
    findRowByData(data: any): Row;
    deselectAll(): void;
    selectRow(row: Row): Row;
    multipleSelectRow(row: Row): Row;
    selectPreviousRow(): Row;
    selectFirstRow(): Row;
    selectLastRow(): Row;
    willSelectFirstRow(): void;
    willSelectLastRow(): void;
    select(): Row;
    createNewRow(): void;
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings: any): void;
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows(): void;
}
