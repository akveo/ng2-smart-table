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
  component: any;

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  constructor(private resolver: ComponentFactoryResolver){
  }

  // sources:
  /*
    http://stackoverflow.com/questions/37487977/passing-input-while-creating-angular-2-component-dynamically-using-componentreso
    http://stackoverflow.com/questions/39241244/angular-2-how-to-dynamically-create-component-instance-with-input-output-from
    http://stackoverflow.com/questions/39280057/how-do-you-use-input-with-components-created-with-a-componentfactoryresolver
    http://stackoverflow.com/questions/39373991/angular2-rc-5-no-component-factory-found-for-dynamically-loaded-components

    http://blog.rangle.io/dynamically-creating-components-with-angular-2/
    https://engineering-game-dev.com/2016/08/19/angular-2-dynamically-injecting-components/
    http://stackoverflow.com/questions/39297219/angular2-rc6-dynamically-load-component-from-module
    http://stackoverflow.com/questions/37540197/angular2-loading-components-dynamically-from-a-service-response
  */

  ngOnChanges(arg) {
    if (this.cell){
      let editorType = this.cell.getColumn().editor && this.cell.getColumn().editor.type;
      if (editorType == 'custom' && !this.component){
        console.log('ok custom type');
        let componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
        this.component = this.dynamicTarget.createComponent(componentFactory);
        this.component.instance.cell = this.cell;
        this.component.instance.inputClass = this.inputClass;
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
    if(this.component) {
      this.component.destroy();
    }
  }
}
