import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cell, Settings} from 'angular2-smart-table';

@Component({
    selector: 'button-view',
    template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
    standalone: false
})
export class ButtonViewComponent {
  renderValue!: string;
  name: string = '';

  @Output() save: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.save.emit();
  }

  static componentInit(instance: ButtonViewComponent, cell: Cell) {
    instance.renderValue = cell.getValue().toUpperCase();
    const name = cell.getRow().getData().name;
    instance.save.subscribe((_: string) => {
      alert(`${name} saved!`)
    });
  }
}



@Component({
    selector: 'basic-example-button-view',
    template: `
    <angular2-smart-table [settings]="settings" [source]="data"></angular2-smart-table>
  `,
    standalone: false
})
export class BasicExampleButtonViewComponent implements OnInit {

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
        type: 'text',
      },
      email: {
        title: 'Email',
        type: 'text',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        componentInitFunction: ButtonViewComponent.componentInit,
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      button: 'Button #1',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      button: 'Button #2',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      button: 'Button #3',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      button: 'Button #4',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      button: 'Button #5',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
