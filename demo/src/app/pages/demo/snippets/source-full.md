import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'basic-example-source',
  directives: [NG2_SMART_TABLE_DIRECTIVES], // register the directive
  styles: [],
  template: `
    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleSourceComponent {

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
      }
    }
  };
  
  data = [
    // ... our data here
  ];
  
  source: LocalDataSource;
  
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = ''): void {
    this.source.setFilter([
      // fields we want to inclue in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform AND or OR search 
    // (meaning all columns should contain search query or at least one)
    // AND by default, so changing to OR be setting false here
  }
}
