import { Component } from '@angular/core';

@Component({
  selector: 'custom-edit-view-examples',
  templateUrl: './custom-edit-view-examples.component.html',
})
export class CustomViewEditExamplesComponent {

  snippets = {
    customEditorModule: require('raw-loader!../snippets/custom-editor-module.md'),
  };

}
