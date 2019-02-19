import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ODataDataSource } from '../../../../../src/ng2-smart-table';

@Component({
  selector: 'odata-example-server',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
})
export class ODataExampleServerComponent {

  settings = {
    columns: {
      OrderID: {
        title: 'ID',
        filter: false,
      },
      CustomerID: {
        title: 'CustomerID',
      },
      OrderDate: {
        title: 'Date',
        filter: false,
      },
      ShipAddress: {
        title: 'Address',
      },
    },
  };

  source: ODataDataSource;

  constructor(http: HttpClient) {
    this.source = new ODataDataSource(http, 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders');
  }
}
