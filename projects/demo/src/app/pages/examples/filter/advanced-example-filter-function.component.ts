import {Component} from '@angular/core';
import {Settings} from "angular2-smart-table";

@Component({
    selector: 'advanced-example-filter-function',
    template: `
    <angular2-smart-table [settings]="settings" [source]="data"></angular2-smart-table>
  `,
    standalone: false
})
export class AdvancedExampleFilterFunctionComponent {

  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      companyName: 'ACME Inc.',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      companyName: 'Contoso Ltd.',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      companyName: 'ACME Inc.',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      companyName: 'Contoso Ltd.',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      companyName: 'ACME Inc.',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      companyName: 'Contoso Ltd.',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      companyName: 'ACME Inc.',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      companyName: 'Contoso Ltd.',
    },
    {
      id: 12,
      name: 'Robert Parr',
      email: 'robert.parr@awesomeinc.biz',
      companyName: 'Awesome Inc.',
    },
  ];

  settings: Settings = {
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
        filterFunction: (cell: any, search: string) => {
          if (search.length > 0 && search[0] === '-') {
            const re = new RegExp(search.substring(1), 'gi');
            return cell.match(re) === null;
          } else {
            const re = new RegExp(search, 'gi');
            return cell.match(re) !== null;
          }
        },
      },
    },
  };
}
