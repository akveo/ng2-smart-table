import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class HomeComponent {

  constructor() {
  }

}
