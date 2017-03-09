import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

import 'style-loader!../../../../../../node_modules/highlight.js/styles/dracula.css';

import 'style-loader!../../demo/demo.scss';

@Component({
  selector: 'various-examples',
  templateUrl: './various-examples.html',
})
export class VariousExamplesComponent {

  ngAfterViewInit(): void {
    hljs.initHighlighting();
  }
}
