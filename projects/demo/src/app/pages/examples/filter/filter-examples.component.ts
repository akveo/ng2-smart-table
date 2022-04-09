import { Component } from '@angular/core';

@Component({
  selector: 'filter-examples',
  templateUrl: './filter-examples.component.html',
})
export class FilterExamplesComponent {

  snippets = {
    sourceRequire: require('raw-loader!../snippets/source-require.md').default,
    createSource: require('raw-loader!../snippets/create-source.md').default,
    sourceTemplate: require('raw-loader!../snippets/source-template.md').default,
    search: require('raw-loader!../snippets/search.md').default,
    searchTable: require('raw-loader!../snippets/search-table.md').default,
    sourceFull: require('raw-loader!../snippets/source-full.md').default,
    hideFilters: require('raw-loader!../snippets/hide-filters.md').default,
  };

}
