import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'style-loader!./app.scss';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(protected router: Router) {

  }

  ngOnInit(): void {
    // weird solution to make path location strategy work with github pages, take a look at 404.html for more details
    var redirect = <string> sessionStorage.getItem('redirect');
    if (redirect && redirect != location.href) {
      redirect = redirect.replace(location.href, '/');
      sessionStorage.removeItem('redirect');

      setTimeout(() => {
        this.router.navigateByUrl(redirect);
      });
    }
  }
}
