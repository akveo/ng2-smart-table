import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'basic-example-custom-actions-item',
  template: `
    <a href="#">{{action.title}} {{renderValue}} </a>
  `,
})
export class BasicExampleCustomActionsItemComponent implements OnInit {
  renderValue: string;

  @Input() action: any;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.rowData.username;
  }

}
