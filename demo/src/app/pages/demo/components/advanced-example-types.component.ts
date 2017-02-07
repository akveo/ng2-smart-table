import { Component } from '@angular/core';
import { CustomColumnComponent } from './custom-column.component';

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
      comments: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      comments: "Vix iudico graecis in? Malis eirmod consectetuer duo ut? Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      comments: "Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      comments: "Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      comments: "Quo viris appellantur an, pro id eirmod oblique iuvaret, timeam omittam comprehensam ad eam? Eos id dico gubergren, cum dicant qualisque ea, id vim ferri moderatius?",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      comments: "Audire appareat sententiae qui no. Sed no rebum vitae quidam.",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      comments: "Mel dicat sanctus accusata ut! Eu sit choro vituperata, qui cu quod gubergren elaboraret, mollis vulputate ex cum!",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      comments: "Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      comments: "In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      comments: "Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id. Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",
      link: "<a href='http://google.com'>Google</a>"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
      comments: "Lorem ipsum dolor sit amet, mea dolorum detraxit ea?",
      link: "<a href='http://google.com'>Google</a>"
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
        type: 'string'
      },
      comments: {
        title: 'Comments',
        editor: {
          type: 'textarea'
        }
      },
      link: {
        title: 'Link',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomColumnComponent
        }
      }
    }
  };
}
