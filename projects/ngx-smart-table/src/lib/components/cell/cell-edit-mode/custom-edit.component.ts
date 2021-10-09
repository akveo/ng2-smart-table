import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  SimpleChanges,
  OnChanges,
  OnDestroy,
} from '@angular/core';

import { EditCellDefault } from './edit-cell-default';

@Component({
  selector: 'table-cell-custom-editor',
  template: `
    <ng-template #dynamicTarget></ng-template>
  `,
})
export class CustomEditComponent extends EditCellDefault implements OnChanges, OnDestroy {

  customComponent: any;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.cell && !this.customComponent) {
      const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);

      // set @Inputs and @Outputs of custom component
      this.customComponent.instance.cell = this.cell;
      this.customComponent.instance.inputClass = this.inputClass;
      this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
      this.customComponent.instance.onEdited.subscribe((event: any) => this.onEdited(event));
      this.customComponent.instance.onClick.subscribe((event: any) => this.onClick(event));
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
