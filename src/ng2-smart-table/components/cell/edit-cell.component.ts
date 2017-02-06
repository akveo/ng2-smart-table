import { Component, Output, EventEmitter, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'table-cell-edit-mode',
  templateUrl: 'edit-cell.component.html',
})
export class EditCellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @ViewChild('dynamicTarget', {read: ViewContainerRef}) dynamicTarget: any;
  customComponent: any;

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  constructor(private resolver: ComponentFactoryResolver){
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

  onEdited(event): boolean {
    this.edited.next(event);
    return false;
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onClick(event): void {
    event.stopPropagation();
  }

  ngOnDestroy() {
    if(this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
