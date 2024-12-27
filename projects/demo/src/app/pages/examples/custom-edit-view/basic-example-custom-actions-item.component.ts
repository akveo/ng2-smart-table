import {Component, Input, OnInit} from '@angular/core';
import {CustomAction} from 'angular2-smart-table';

@Component({
    selector: 'basic-example-custom-actions-item',
    template: `
    <a href="#">{{action.title}} {{renderValue}} </a>
  `,
    standalone: false
})
export class BasicExampleCustomActionsItemComponent implements OnInit {
  renderValue!: string;

  @Input() action!: CustomAction;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.rowData.username;
  }

}
