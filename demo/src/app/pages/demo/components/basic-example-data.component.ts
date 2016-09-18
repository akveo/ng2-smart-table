import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES } from '../../../../../../ng2-smart-table.ts';

@Component({
  selector: 'basic-example-data',
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      },
      date: {
        title: 'Date',
        inputAttributes: {
          type: 'date',
          max: '2018-01-01',
          min: '2015-01-01'
        }
      }
    }
  };
  
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      date: '2017-01-01',
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      date: '2017-01-01',
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      date: '2017-01-01',
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      date: '2017-01-01',
      email: "Julianne.OConner@kory.org"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      date: '2017-01-01',
      email: "Lucio_Hettinger@annie.ca"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      date: '2017-01-01',
      email: "Karley_Dach@jasper.info"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      date: '2017-01-01',
      email: "Telly.Hoeger@billy.biz"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      date: '2017-01-01',
      email: "Sherwood@rosamond.me"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      date: '2017-01-01',
      email: "Chaim_McDermott@dana.io"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      date: '2017-01-01',
      email: "Rey.Padberg@karina.biz"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      date: '2017-01-01',
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
}
