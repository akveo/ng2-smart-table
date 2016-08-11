import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  static DATA_SIZE = 500;

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.generateData());
      }, 2000);
    });
  }

  getNewExampleObj(n?: number): any {
    n = typeof n !== 'undefined' ? n : Math.random() * 1000;
    return {
      orgnId: n,
      id: n,
      objectId: n,
      objectType: `type number ${n}`,
      name: `name ${n}`,
      description: 'Building new questionnaire from scratch. \nmodified on <strong>28th Jan</strong>',
      actionPerformed: `action number ${n}`,
      createdBy: n,
      createdOn: new Date(),
      uid: '1b1b89c6-ff15-44b8-b328-82f13cee4fbf',
      add: n * 100
    };
  }

  protected generateData(): Array<any> {
    let data = [];
    for (let i = 0; i < AppService.DATA_SIZE; i++) {
      data.push(this.getNewExampleObj(i));
    }
    return data;
  }
}
