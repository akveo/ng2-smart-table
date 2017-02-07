import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { EditCellDefault } from './edit-cell-default';
import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-custom-editor',
  template: `
    <template #dynamicTarget></template>
  `,
})
export class CustomEditComponent extends EditCellDefault {

  @ViewChild('dynamicTarget', {read: ViewContainerRef}) dynamicTarget: any;
  customComponent: any;

  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  ngOnChanges(arg) {
    if (this.cell){
      let editorType = this.cell.getColumn().editor && this.cell.getColumn().editor.type;
      if (editorType === 'custom' && !this.customComponent){
        let componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);

        // set @Inputs and @Outputs
        this.customComponent.instance.cell = this.cell;
        this.customComponent.instance.inputClass = this.inputClass;
        this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
        this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
        this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
      }
    }
  }

  ngOnDestroy() {
    if(this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
