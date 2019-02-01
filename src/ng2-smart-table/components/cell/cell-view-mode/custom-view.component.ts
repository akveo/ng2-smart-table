import {
  Component,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { ViewCell } from './view-cell';

@Component({
  selector: 'custom-view-component',
  template: `
    <ng-template #dynamicTarget></ng-template>
  `,
})
export class CustomViewComponent implements OnInit, OnDestroy {

  customComponent: any;
  @Input() cell: Cell;
  @ViewChild('dynamicTarget', { read: ViewContainerRef }) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.cell && !this.customComponent) {
      this.createCustomComponent();
      this.patchInstance();
      this.callOnComponentInit();
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }

  protected createCustomComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
    this.customComponent = this.dynamicTarget.createComponent(componentFactory);
  }

  protected callOnComponentInit(): boolean {
    const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
    if (onComponentInitFunction) {
      const componentInputs = onComponentInitFunction(
        this.cell.getValue(),
        this.cell.getRow().getData());
        Object.assign(this.customComponent.instance, componentInputs);
        return true;
    }
    return false;
  }

  protected patchInstance() {
    Object.assign(this.customComponent.instance, this.getPatch());
  }

  protected getPatch(): ViewCell {
    return {
      value: this.cell.getValue(),
      rowData: this.cell.getRow().getData()
    }
  }
}
