import { Component, ViewEncapsulation } from '@angular/core';
import { LocalDataSource, NG2_SMART_TABLE_DIRECTIVES } from '../../../ng2-smart-table';
import { AppService } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [NG2_SMART_TABLE_DIRECTIVES],
  providers: [AppService],
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
        sort: false,
        class: 'custom-column-class'
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

  source: LocalDataSource = new LocalDataSource();
  
  constructor(protected service: AppService) {
    
  }

  ngOnInit(): void {
    this.service.getData().then((data) => {
      this.source.load(data);
    })
  }
}
