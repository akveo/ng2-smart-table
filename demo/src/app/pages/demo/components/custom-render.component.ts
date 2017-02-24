import { Component, Input } from '@angular/core';

import { ViewCell } from '../../../../../../ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
    `
})
export class CustomRenderComponent implements ViewCell {

  renderValue: string;
  @Input() value: string | number;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
}
