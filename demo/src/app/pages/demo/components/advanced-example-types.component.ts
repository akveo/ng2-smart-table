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
      name: "Leanne Graham",
      username: "Bret",
      email: ["Telly.Hoeger@billy.biz"],
      comments: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.",
      passed: "Yes",
    },
    {
      name: "Ervin Howell",
      username: "Antonette",
      email: ["Sincere@april.biz"],
      comments: "Vix iudico graecis in? Malis eirmod consectetuer duo ut? Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",
      passed: "Yes",
    },
    {
      name: "Clementine Bauch",
      username: "<b>Samantha</b>",
      email: ["Sincere@april.biz"],
      comments: "Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.",
      passed: "No",
    },
    {
      name: "Patricia Lebsack",
      username: "Karianne",
      email: ["Sincere@april.biz", "<b>Rey.Padberg@karina.biz</b>"],
      comments: "Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?",
      passed: "Yes",
    },
    {
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: ["Telly.Hoeger@billy.biz"],
      comments: "Quo viris appellantur an, pro id eirmod oblique iuvaret, timeam omittam comprehensam ad eam? Eos id dico gubergren, cum dicant qualisque ea, id vim ferri moderatius?",
      passed: "No",
    },
    {
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: ["Sincere@april.biz"],
      comments: "Audire appareat sententiae qui no. Sed no rebum vitae quidam.",
      passed: "No",
    },
    {
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: ["Telly.Hoeger@billy.biz", "Sincere@april.biz"],
      comments: "Mel dicat sanctus accusata ut! Eu sit choro vituperata, qui cu quod gubergren elaboraret, mollis vulputate ex cum!",
      passed: "Yes",
    },
    {
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: ["<b>Rey.Padberg@karina.biz</b>"],
      comments: "Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.",
      passed: "No",
    }
  ];

  settings = {
    columns: {
      name: {
        title: 'Full Name',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: this.data.map((el) => {
                // optional, but completer.data does not accept object type data
                // so here we are stripping out the email field
                return { name: el.name, username: el.username }}
              ),
              searchFields: 'name',
              titleField: 'name',
              descriptionField: 'username'
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
        editor: {
          type: 'list-advanced',
          config: {
            // when { multiple: true } remember to format data.email as an Array
            multiple: true,
            list: [
              { value: 'Telly.Hoeger@billy.biz', title: 'Telly.Hoeger@billy.biz' },
              { value: '<b>Rey.Padberg@karina.biz</b>', title: 'Rey.Padberg@karina.biz' },
              { value: 'Sincere@april.biz', title: 'Sincere@april.biz' }
            ]
          }
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
