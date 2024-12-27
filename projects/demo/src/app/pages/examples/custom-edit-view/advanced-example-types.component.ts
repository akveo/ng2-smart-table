import {Component} from '@angular/core';
import {Settings} from "angular2-smart-table";

@Component({
    selector: 'advanced-example-types',
    template: `
    <style>
      ::ng-deep .with-ellipsis {
        max-width: 10rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    </style>
    <angular2-smart-table [settings]="settings" [source]="data"></angular2-smart-table>
  `,
    standalone: false
})
export class AdvancedExamplesTypesComponent {

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      job: 'Developer',
      email: 'Sincere@april.biz',
      comments: 'Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.',
      passed: 'Yes',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      job: 'Developer',
      email: 'Shanna@melissa.tv',
      comments: `Vix iudico graecis in? Malis eirmod consectetuer duo ut?
                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.`,
      passed: 'Yes',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      job: 'Team Lead',
      email: 'Nathan@yesenia.net',
      comments: 'Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.',
      passed: 'No',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      job: 'Developer',
      email: 'Julianne.OConner@kory.org',
      comments: 'Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      job: 'Developer',
      email: 'Lucio_Hettinger@annie.ca',
      comments: `Quo viris appellantur an, pro id eirmod oblique iuvaret,
                timeam omittam comprehensam ad eam? Eos id dico gubergren,
                cum dicant qualisque ea, id vim ferri moderatius?`,
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      job: 'Management',
      email: 'Karley_Dach@jasper.info',
      comments: 'Audire appareat sententiae qui no. Sed no rebum vitae quidam.',
      passed: 'No',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      job: 'Developer',
      email: 'Telly.Hoeger@billy.biz',
      comments: `Mel dicat sanctus accusata ut! Eu sit choro vituperata,
                qui cu quod gubergren elaboraret, mollis vulputate ex cum!`,
      passed: 'Yes',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      job: 'Team Lead',
      email: 'Sherwood@rosamond.me',
      comments: 'Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.',
      passed: 'No',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      job: 'Developer',
      email: 'Chaim_McDermott@dana.io',
      comments: 'In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      job: 'Developer',
      email: 'Rey.Padberg@karina.biz',
      comments: `Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.
                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?`,
      passed: 'Yes',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      job: 'Developer',
      email: 'Rey.Padberg@rosamond.biz',
      comments: 'Lorem ipsum dolor sit amet, mea dolorum detraxit ea?',
      passed: 'No',
    },
  ];

  settings: Settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'text',
      },
      name: {
        title: 'Full Name',
        type: 'text',
      },
      username: {
        title: 'User Name',
        type: 'html',
      },
      job: {
        title: 'Job',
        type: 'text',
        editor: {
          type: 'list',
          config: {
            list: [
              {value: 'Developer', title: 'Developer'},
              {value: 'Team Lead', title: 'Team Lead'},
              {value: 'Management', title: 'Management'},
            ],
          },
        },
      },
      email: {
        title: 'Email',
        type: 'text',
      },
      comments: {
        title: 'Comments',
        type: 'text',
        classContent: 'with-ellipsis',
        editor: {
          type: 'textarea',
        },
      },
      passed: {
        title: 'Passed',
        type: 'text',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
          },
        },
      },
    },
  };
}
