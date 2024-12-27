import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-component',
    styles: [`
    li::marker {
      content: '';
    }
    ul {
      padding: 0;
    }
  `],
    templateUrl: './header.component.html',
    standalone: false
})
export class HeaderComponent {

  @Input() tagline: string = '';

}
