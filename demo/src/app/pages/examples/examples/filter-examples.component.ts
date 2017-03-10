import { Component } from '@angular/core';
import * as hljs from 'highlight.js';

import 'style-loader!../../../../../../node_modules/highlight.js/styles/dracula.css';

import 'style-loader!../../demo/demo.component.scss';

@Component({
  selector: 'filter-examples',
  templateUrl: './filter-examples.component.html',
})
export class FilterExamplesComponent {

  snippets = {
    sourceRequire: require('raw-loader!../snippets/source-require.md'),
    createSource: require('raw-loader!../snippets/create-source.md'),
    sourceTemplate: require('raw-loader!../snippets/source-template.md'),
    search: require('raw-loader!../snippets/search.md'),
    searchTable: require('raw-loader!../snippets/search-table.md'),
    sourceFull: require('raw-loader!../snippets/source-full.md'),
    hideFilters: require('raw-loader!../snippets/hide-filters.md'),
  };

  ngAfterViewInit(): void {
    hljs.initHighlighting();
  }
}
