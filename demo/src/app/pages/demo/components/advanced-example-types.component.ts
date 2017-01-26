import { Component } from '@angular/core';

@Component({
  selector: 'advanced-example-types',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class AdvancedExamplesTypesComponent {

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      passed: "No"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      passed: "Yes"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      passed: "No"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      passed: "Yes"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      passed: "Yes"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      passed: "No"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      passed: "Yes"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      passed: "No"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      passed: "No"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      passed: "No"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      passed: "Yes"
    }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name',
        type: 'completer',
        config: {
          completer: {
            data: this.data,
            searchFields: 'name',
            titleField: 'name',
            descriptionField: 'email'
          }
        }
      },
      username: {
        title: 'User Name',
        type: 'list',
        config: {
          // when multiselect is possible, the source list (usernamne field) should be of type array
          multiple: true,
          list: [{value: 'Antonette', title: 'Antonette'}, {value: 'Bret', title: 'Bret'}, {value: 'Samantha', title: 'Samantha'}]
        }
      },
      email: {
        title: 'Email',
      },
      passed: {
        title: 'Passed',
        type: 'checkbox',
        config: {
          true: 'Yes',
          false: 'No'
        }
      }
    }
  };
}
