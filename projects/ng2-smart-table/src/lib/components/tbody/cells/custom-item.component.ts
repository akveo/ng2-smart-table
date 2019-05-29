import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-custom-item',
  template: `
    <ng-template #dynamicTarget></ng-template>
  `,
})
export class TbodyCustomItemComponent implements OnInit {

  customComponent: any;
  @Input() action: any;
  @Input() row: Row;
  @ViewChild('dynamicTarget', { read: ViewContainerRef }) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.action && !this.customComponent) {
      this.createCustomComponent();
      this.patchInstance();
    }
  }

  protected createCustomComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(this.action.renderComponent);
    this.customComponent = this.dynamicTarget.createComponent(componentFactory);
  }

  protected patchInstance() {
    Object.assign(this.customComponent.instance, this.getPatch());
  }

  protected getPatch(): any {
    return {
      action: this.action,
      rowData: this.row.getData(),
    };
  }
}
