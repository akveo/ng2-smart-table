import { Component } from '@angular/core';

@Component({
  selector: 'advanced-example-filter-function',
  template: `
    <ngx-smart-table [settings]="settings" [source]="data"></ngx-smart-table>
  `,
})
export class AdvancedExampleFilterFunctionComponent {

  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      companyName: 'ACME Inc.',
      companyId: 123,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      companyName: 'Contoso Ltd.',
      companyId: 456,
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      companyName: 'ACME Inc.',
      companyId: 123,
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      companyName: 'Contoso Ltd.',
      companyId: 456,
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      companyName: 'ACME Inc.',
      companyId: 123,
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      companyName: 'Contoso Ltd.',
      companyId: 456,
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      companyName: 'ACME Inc.',
      companyId: 123,
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      companyName: 'Contoso Ltd.',
      companyId: 456,
    },
    {
      id: 12,
      name: 'Robert Parr',
      email: 'robert.parr@awesomeinc.biz',
      companyName: 'Awesome Inc.',
      companyId: 789,
    },
  ];

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    pager: {
        perPage: 8,
    },
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      email: {
        title: 'Email',
      },
      companyName: {
        title: 'Company Name',
        filterFunction: (cell, search, row) => {
          if (search.length > 0 && search[0] === '-') {
            const re = new RegExp(search.substring(1), 'gi');
            if (cell.match(re)) {
              return false;
            } else {
              return true;
            }
          } else {
            const re = new RegExp(search, 'gi');
            if (cell.match(re) || row.companyId.toString().match(re)) {
              return true;
            } else {
              return false;
            }
          }
        },
      },
    },
  };
}
