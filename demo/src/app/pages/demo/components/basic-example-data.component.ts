import { Component } from '@angular/core';
import { CustomServerDataSource } from './serve.data-source';
import { Http } from '@angular/http';

@Component({
  selector: 'basic-example-data',
  styles: [],
  providers: [CustomServerDataSource],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      albumId: {
        title: 'Album'
      },
      title: {
        title: 'Title'
      },
      url: {
        title: 'Url'
      }
    }
  };

  constructor(protected source: CustomServerDataSource) {
  }
}
