import {Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef,} from '@angular/core';

import {Cell} from '../../../lib/data-set/cell';

@Component({
    selector: 'custom-view-component',
    template: `
    <ng-template #dynamicTarget></ng-template>
  `,
    standalone: false
})
export class CustomViewComponent implements OnInit, OnDestroy {

  customComponent: any;
  @Input() cell!: Cell;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget!: ViewContainerRef;

  ngOnInit() {
    if (this.cell && !this.customComponent) {
      this.customComponent = this.dynamicTarget.createComponent(this.cell.getColumn().renderComponent);
      const componentInitFunction = this.cell.getColumn().componentInitFunction;
      if (componentInitFunction === undefined) {
        console.error('Since version 3.0.0, a custom renderer always needs a componentInitFunction');
      } else {
        componentInitFunction(this.customComponent.instance, this.cell);
      }
    }
  }

  ngOnDestroy() {
    this.customComponent.destroy();
  }
}
