import { Component, ViewEncapsulation } from '@angular/core';
import { BasicExampleSourceComponent } from '../demo/components/basic-example-source.component';


@Component({
  selector: 'home',
  directives: [BasicExampleSourceComponent],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class HomeComponent {

  constructor() {
  }

}
