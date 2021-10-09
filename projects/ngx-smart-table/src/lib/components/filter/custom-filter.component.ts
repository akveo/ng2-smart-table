import {
  Component,
  ComponentFactoryResolver, Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { FilterDefault } from './filter-default';

@Component({
  selector: 'custom-table-filter',
  template: `<ng-template #dynamicTarget></ng-template>`,
})
export class CustomFilterComponent extends FilterDefault implements OnChanges, OnDestroy {
  @Input() query: string;
  customComponent: any;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.column && !this.customComponent) {
      const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);

      // set @Inputs and @Outputs of custom component
      this.customComponent.instance.query = this.query;
      this.customComponent.instance.column = this.column;
      this.customComponent.instance.source = this.source;
      this.customComponent.instance.inputClass = this.inputClass;
      this.customComponent.instance.filter.subscribe((event: any) => this.onFilter(event));
    }
    if (this.customComponent) {
      this.customComponent.instance.ngOnChanges(changes);
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
