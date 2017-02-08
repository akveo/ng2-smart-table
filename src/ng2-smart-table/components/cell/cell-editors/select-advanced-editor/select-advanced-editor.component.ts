import { Component, Renderer, OnInit, OnDestroy, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { SelectAdvancedEditorService } from './select-advanced-editor.service';
import { DefaultEditor } from '../default-editor';

@Component({
  selector: 'select-advanced-editor',
  styleUrls: ['./select-advanced-editor.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [SelectAdvancedEditorService],
  template: `
    <div #selectContainer></div>
  `
})
export class SelectAdvancedEditorComponent extends DefaultEditor implements OnInit, OnDestroy {

  multiple: boolean;
  options: Array<any>;
  name: string;
  selected: any;
  disabled: boolean;
  @ViewChild('selectContainer') selectContainer: ElementRef;

  constructor(
    protected selectAdvancedService: SelectAdvancedEditorService,
    protected renderer: Renderer
  ) {
    super();
  }

  ngOnInit(): void {
    this.setupParams();
    this.initialize();

    this.selectContainer.nativeElement.addEventListener('change', (data) => {
      // remove first element, if empty
      if (data.value[0] === '')
        data.value.splice(0, 1);

      this.cell.setValue(data.value);
    });
  }

  setupParams(): void {
    // can't do this in constructor because this.cell is not defined yet
    this.name = this.cell.getId();
    this.selected = this.cell.getValue();
    this.disabled = !this.cell.isEditable();
    this.multiple = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().multiple;
    this.options = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().list;
  }

  initialize(): void {
    this.selectAdvancedService.simpleSelect(
      this.selectContainer.nativeElement,
      this.disabled,
      this.options,
      this.selected,
      this.multiple);
  }

  ngOnDestroy(): void {
    this.selectContainer.nativeElement.removeEventListener('change');
  }
}
