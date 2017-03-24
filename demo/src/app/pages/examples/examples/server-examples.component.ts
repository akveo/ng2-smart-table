import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

import 'style-loader!../../../../../../node_modules/highlight.js/styles/dracula.css';

import 'style-loader!../../demo/demo.component.scss';

@Component({
  selector: 'server-examples',
  templateUrl: './server-examples.component.html',
})
export class ServerExamplesComponent {

  ngAfterViewInit(): void {
    hljs.initHighlighting();
  }
}
