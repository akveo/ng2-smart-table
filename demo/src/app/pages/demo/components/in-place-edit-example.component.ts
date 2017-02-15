import { Component } from '@angular/core';

@Component({
  selector: 'in-place-edit-example',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class InPlaceEditComponent {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name',
        inPlaceEdit: true
      },
      check: {
        title: 'Check',
        type: 'bool',
        inPlaceEdit: true,
        editor: {
          type: 'checkbox'
        }
      },
      list: {
        title: 'the list',
        type: 'list'

      }
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      check: true,
      list: "qwerty"
    }];

  ngOnInit() {
  }
}
