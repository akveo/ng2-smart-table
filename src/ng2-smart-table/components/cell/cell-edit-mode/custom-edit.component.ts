import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  SimpleChanges,
  OnChanges,
  OnDestroy } from '@angular/core';

import { EditCellDefault } from './edit-cell-default';
import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-custom-editor',
  template: `
    <template #dynamicTarget></template>
  `,
})
export class CustomEditComponent extends EditCellDefault implements OnChanges {

  customComponent: any;
  @ViewChild('dynamicTarget', {read: ViewContainerRef}) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cell && !this.customComponent){
      let componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);

      // set @Inputs and @Outputs of custom component
      this.customComponent.instance.cell = this.cell;
      this.customComponent.instance.inputClass = this.inputClass;
      this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
      this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
      this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
    }
  }

  ngOnDestroy(): void {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
