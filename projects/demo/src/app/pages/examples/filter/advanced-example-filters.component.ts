import {Component} from '@angular/core';
import {Settings} from "angular2-smart-table";

@Component({
    selector: 'advanced-example-filters',
    template: `
    <angular2-smart-table [settings]="settings" [source]="data"></angular2-smart-table>
  `,
    standalone: false
})
export class AdvancedExampleFiltersComponent {

  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      status: 'Active',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      status: 'Active',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      status: 'Active',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      status: 'Inactive',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      status: 'Active',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      status: 'Active',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      status: 'Inactive',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      status: 'Active',
      passed: 'Yes',
    },
    {
      id: 12,
      name: 'Chelsey Dietrichdottir',
      email: 'Lucio_Hettinger@annie.ca',
      status: 'Active',
      passed: 'No',
    },
  ];

  settings: Settings = {
    columns: {
      id: {
        title: 'ID',
        placeholder: 'Prueba',
      },
      name: {
        title: 'Full Name',
      },
      email: {
        title: 'Email',
      },
      status: {
        title: 'Status',
        filter: {
          type: 'list',
          config: {
            selectText: 'Show only...',
            list: ['Inactive', 'Active'].map(v =>({value: v, title: v}))
          }
        },
      },
      passed: {
        title: 'Passed',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: 'clear',
          },
        },
      },
    },
  };
}
