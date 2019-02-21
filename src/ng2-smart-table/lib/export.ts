
export class TableColumn {
    field: string;
    title: string;
    isExport: boolean;
    valuePrepareFunction: Function;
}

export const prepareColumnMap = (settingColumns: any): Map<string, TableColumn> => {
    const columnMap: Map<string, TableColumn> = new Map<string, TableColumn>();
    for (const key in settingColumns) {
        if (!settingColumns.hasOwnProperty(key)) {
            continue;
        }
        const column: TableColumn = new TableColumn();
        column.title = settingColumns[key]['title'];
        column.field = key;
        column.isExport = settingColumns[key]['isExport'];
        column.valuePrepareFunction = settingColumns[key]['valuePrepareFunction'];
        columnMap.set(column.field, column);
    }
    return columnMap;
}

export const exportToCsv = (source: any, settingColumns: any) => {
    const columnMap = prepareColumnMap(settingColumns.columns);
    const columns: TableColumn[] = Array.from(columnMap.values());

    let encodedStr = columns.reduce((acct, current: TableColumn) => {
        if (current.isExport !== false) {
            return acct += '"' + current.title + '",';
        } else {
            return acct;
        }
    }, '');

    encodedStr = encodedStr.slice(0, -1);
    encodedStr += '\r\n';

    const fields: string[] = columns.reduce((acct, column: TableColumn) => {
        if (column.isExport !== false) {
            acct.push(column.field);
        }
        return acct;
    }, []);

    source.getAll().then((rows: any) => {
        rows.forEach((row: any) => {
            fields.forEach((field) => {
                if (row.hasOwnProperty(field)) {
                    let value = row[field];

                    if (!value) {
                        value = ' ';
                    }
                    const valuePrepare = columnMap.get(field).valuePrepareFunction;
                    if (valuePrepare) {
                        value = valuePrepare.call(null, value, row);
                    }
                    encodedStr += '"' + value + '",';
                }
            });
            encodedStr = encodedStr.slice(0, -1);
            encodedStr += '\r\n';
        });

        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        // Set utf-8 header to let excel recognize its encoding
        const blob = new Blob(['\ufeff', encodedStr], { type: 'text/csv;charset=utf-8;' });
        a.href = window.URL.createObjectURL(blob);
        a.download = ('data-file') + '.csv';
        a.click();
    });
}
