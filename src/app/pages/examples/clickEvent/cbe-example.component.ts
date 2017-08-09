import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'cbe-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (rowSelect)="click($event)"></ng2-first-table>
  `,
})

export class CbeExampleComponent {
    settings = {
        selectMode: 'multi', // 复选框
        columns: {
            id: {
                title: 'ID',
            },
            name: {
                title: 'Full Name',
            },
            username: {
                title: 'User Name',
            },
            email: {
                title: 'Email',
            },
        },
    };

    data = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
        },
    ];

    source: LocalDataSource;

    constructor() {
        this.source = new LocalDataSource(this.data);
    }

    // 复选框勾选事件方法 方法名自定义
    click(event): void {
        console.info(event);
    }
}
