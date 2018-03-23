import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'advanced-example-filters',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class AdvancedExampleFiltersComponent {

  constructor(private datePipe: DatePipe) {
  }

  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      passed: 'Yes',
      date: '2002-09-03T00:00:00',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
      date: '2018-05-25T00:00:00',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      passed: 'Yes',
      date: '2009-12-21T00:00:00',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
      date: '2005-07-11T00:00:00',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      passed: 'Yes',
      date: '2018-11-31T00:00:00',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
      date: '2010-01-01T00:00:00',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
      date: '2013-12-31T00:00:00',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Yes',
      date: '2012-02-31T00:00:00',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Glenna Reichert', title: 'Glenna Reichert' },
              { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
              { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
            ],
          },
        },
      },
      email: {
        title: 'Email',
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: this.data,
              searchFields: 'email',
              titleField: 'email',
            },
          },
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
      date: {
        title: 'Date',
        filter: {
          type: 'daterange',
          config: {
            daterange: {
              format: 'mm/dd/yyyy',
            },
          },
        },
        type: 'html',
        valuePrepareFunction: (cell) => {
          if (cell !== '') {
            const date = new Date(cell);
            // Conver date in to a string(mm/dd/yyyy)
            return this.datePipe.transform(date, 'MM/dd/yyyy');
          } else {
            return '';
          }
        },
      },
    },
  };
}
