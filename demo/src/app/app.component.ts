import { Component, ViewEncapsulation } from '@angular/core';
import { NG2_SMART_TABLE_DIRECTIVES } from '../../../src/ng2-smart-table.directives';
import { LocalDataSource } from '../../../src/ng2-smart-table/lib';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  directives: [NG2_SMART_TABLE_DIRECTIVES],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.scss')],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class AppComponent {

  settings = {
    mode: 'inline',
    actions: { // actions to perform on table
      add: true,
      edit: true,
      delete: true
    },
    filter: {
      //inputClass: 'form-control',
    },
    edit: {
      //inputClass: 'form-control',
      //editButtonContent: '',
      //saveButtonContent: '',
      //cancelButtonContent: ''
    },
    add: {
      //inputClass: 'form-control',
      //addButtonContent: '',
      //createButtonContent: '',
      //cancelButtonContent: ''
    },
    delete: {
      //deleteButtonContent: ''
    },

    attr: {
      // assigns class to the table
      class: 'table',
      // assigns id to the table
      id: 'smart-table'
    },

    pager: {
      display: true,
      perPage: 10
    },

    // columns mapping
    columns: {
      // key of the column, should be the same as key in the json object
      orgnId: {
        // title in the table header
        title: 'Organization ID',
        // value type (how to treat the value, not implemented)
        type: 'number',
        // sort (false, true or if you want to sort the table by defaul - asc|desc)
        sort: false
      },
      id: {
        title: 'ID',
        type: 'number',
        sort: 'asc',
        editable: false
      },
      name: {
        title: 'Name',
        type: 'string',
        sort: false,
        // shows filter for the column
        filter: true
        // custom filter function, called instead of a default one
        // filterFunction: (value, search) => {
        //   return value.indexOf(search) > -1;
        // }
      },
      actionPerformed: {
        title: 'Action',
        type: 'string',
        sort: true,
        filter: true
      },
      add: {
        title: 'Additional field',
        type: 'string',
        sort: true,
        filter: true
      }
    }
  };

  source: LocalDataSource;

  ngOnInit(): void {
    this.source = new LocalDataSource();
  }
}
