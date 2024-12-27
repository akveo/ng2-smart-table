import {Component, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef,} from '@angular/core';

import {EditCellDefault} from './edit-cell-default';

@Component({
    selector: 'table-cell-custom-editor',
    template: `
    <ng-template #dynamicTarget></ng-template>
  `,
    standalone: false
})
export class CustomEditComponent extends EditCellDefault implements OnChanges, OnDestroy {

  customComponent: any;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget!: ViewContainerRef;

  ngOnChanges(changes: SimpleChanges) {
    if (this.cell && !this.customComponent) {
      const editor = this.cell.getColumn().editor;
      if (!editor) return;
      this.customComponent = this.dynamicTarget.createComponent(editor.component);

      // set @Inputs and @Outputs of custom component
      this.customComponent.instance.cell = this.cell;
      this.customComponent.instance.inputClass = this.inputClass;
      this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
      this.customComponent.instance.onEdited.subscribe(() => this.onEdited());
      this.customComponent.instance.onClick.subscribe((event: MouseEvent) => this.onClick(event));
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
