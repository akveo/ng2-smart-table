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
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.",
      passed: "Yes",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Vix iudico graecis in? Malis eirmod consectetuer duo ut? Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",
      passed: "Yes",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.",
      passed: "No",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?",
      passed: "Yes",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Quo viris appellantur an, pro id eirmod oblique iuvaret, timeam omittam comprehensam ad eam? Eos id dico gubergren, cum dicant qualisque ea, id vim ferri moderatius?",
      passed: "No",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Audire appareat sententiae qui no. Sed no rebum vitae quidam.",
      passed: "No",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Mel dicat sanctus accusata ut! Eu sit choro vituperata, qui cu quod gubergren elaboraret, mollis vulputate ex cum!",
      passed: "Yes",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.",
      passed: "No",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.",
      passed: "No",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id. Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",
      passed: "Yes",
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: ["<b>Sincere@april.biz</b>"],
      comments: "Lorem ipsum dolor sit amet, mea dolorum detraxit ea?",
      passed: "No",
    }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: this.data,
              searchFields: 'name',
              titleField: 'name',
              descriptionField: 'email'
            }
          }
        }
      },
      username: {
        title: 'User Name',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
              value: '<b>Samantha</b>',
              title: 'Samantha'
            }]
          }
        }
      },
      email: {
        title: 'Email',
        type: 'html',
        config: {
          type: 'list-advanced',
          // when multiselect is possible, the source list (usernamne field) should be of type array
          multiple: true,
          list: [
            { value: '<em>Telly.Hoeger@billy.biz</em>', title: 'Telly.Hoeger@billy.biz' },
            { value: '<u>Rey.Padberg@karina.biz</u>', title: 'Rey.Padberg@karina.biz' },
            { value: '<b>Sincere@april.biz</b>', title: 'Sincere@april.biz' }
          ]
        }
      },
      comments: {
        title: 'Comments',
        editor: {
          type: 'textarea'
        }
      },
      passed: {
        title: 'Passed',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No'
          }
        }
      }
    }
  };
}
