import {
  Component,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit,
  OnDestroy } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'custom-view-component',
  template: `
    <template #dynamicTarget></template>
  `,
})
export class CustomViewComponent implements OnInit {

  customComponent: any;
  @Input() cell: Cell;
  @ViewChild('dynamicTarget', {read: ViewContainerRef}) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    if (this.cell && !this.customComponent){
      let componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);

      // set @Inputs and @Outputs of custom component
      this.customComponent.instance.value = this.cell.getValue();
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
