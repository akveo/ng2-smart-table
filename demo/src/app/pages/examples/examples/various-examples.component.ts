import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

import 'style-loader!../../../../../../node_modules/highlight.js/styles/dracula.css';

<<<<<<< HEAD
import 'style-loader!../../demo/demo.component.scss';

@Component({
  selector: 'various-examples',
  templateUrl: './various-examples.component.html',
=======
import 'style-loader!../../demo/demo.scss';

@Component({
  selector: 'various-examples',
  templateUrl: './various-examples.html',
>>>>>>> ae44008764f190f77e4c976bfa25f170d3b05b1f
})
export class VariousExamplesComponent {

  ngAfterViewInit(): void {
    hljs.initHighlighting();
  }
}
