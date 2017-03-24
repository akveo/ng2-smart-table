import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

import 'style-loader!../../../../../../node_modules/highlight.js/styles/dracula.css';

import 'style-loader!../../demo/demo.component.scss';

@Component({
  selector: 'custom-edit-view-examples',
  templateUrl: './custom-edit-view-examples.component.html',
})
export class CustomViewEditExamplesComponent {

  snippets = {
    customEditorModule: require('raw-loader!../snippets/custom-editor-module.md'),
  };

  ngAfterViewInit(): void {
    hljs.initHighlighting();
  }
}
