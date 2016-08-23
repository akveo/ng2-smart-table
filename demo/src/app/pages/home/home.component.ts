import { Component, ViewEncapsulation } from '@angular/core';
import { BasicExampleDataComponent } from '../demo/components/basic-example-data.component';

@Component({
  selector: 'home',
  directives: [BasicExampleDataComponent],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class HomeComponent {

  constructor() {
  }

}
