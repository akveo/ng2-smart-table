import {Component, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';

import {FilterDefault} from './filter-default';

@Component({
    selector: 'custom-table-filter',
    template: `<ng-template #dynamicTarget></ng-template>`,
    standalone: false
})
export class CustomFilterComponent extends FilterDefault implements OnChanges, OnDestroy {
  customComponent: any;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget!: ViewContainerRef;

  ngOnChanges(changes: SimpleChanges) {
    if (this.column && !this.customComponent) {
      const filter = this.column.filter;
      if (!filter) {
        return;
      }
      this.customComponent = this.dynamicTarget.createComponent(filter.component);

      // set @Inputs and @Outputs of custom component
      this.customComponent.instance.query = this.query;
      this.customComponent.instance.column = this.column;
      this.customComponent.instance.source = this.source;
      this.customComponent.instance.inputClass = this.inputClass;
      this.customComponent.instance.debounceTime = this.debounceTime;
      this.customComponent.instance.filter.subscribe((event: any) => { this.onFilter(event)});
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
