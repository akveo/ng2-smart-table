import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerDataSource, Settings} from 'angular2-smart-table';

@Component({
    selector: 'advanced-example-server',
    template: `
    <angular2-smart-table [settings]="settings" [source]="source"></angular2-smart-table>
  `,
    standalone: false
})
export class AdvancedExampleServerComponent {

  settings: Settings = {
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    },
    filter: {
      // illustrate how increasing the debounce time may help
      // to reduce server requests for audiences with slower typing speed
      debounceTime: 800,
    }
  };

  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
  }
}
