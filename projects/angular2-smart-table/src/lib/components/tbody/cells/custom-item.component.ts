import {Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Row} from '../../../lib/data-set/row';
import {CustomAction} from '../../../lib/settings';

@Component({
    selector: 'angular2-st-tbody-custom-item',
    template: `
    <ng-template #dynamicTarget></ng-template>
  `,
    standalone: false
})
export class TbodyCustomItemComponent implements OnInit, OnDestroy {

  customComponent: any;
  @Input() action!: CustomAction;
  @Input() row!: Row;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget!: ViewContainerRef;

  ngOnInit() {
    this.customComponent = this.dynamicTarget.createComponent(this.action.renderComponent);
    Object.assign(this.customComponent.instance, this.getPatch());
  }

  ngOnDestroy() {
    this.customComponent.destroy();
  }

  protected getPatch() {
    return {
      action: this.action,
      rowData: this.row.getData(),
    };
  }
}
