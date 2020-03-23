import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {

  snippets = {
    install: require('raw-loader!./snippets/install.md').default,
    require: require('raw-loader!./snippets/require.md').default,
    directive: require('raw-loader!./snippets/directive.md').default,
    settings: require('raw-loader!./snippets/settings.md').default,
    template: require('raw-loader!./snippets/template.md').default,
    array: require('raw-loader!./snippets/array.md').default,
    dataTemplate: require('raw-loader!./snippets/data-template.md').default,
    basicFull: require('raw-loader!./snippets/basic-full.md').default,
  };

}
