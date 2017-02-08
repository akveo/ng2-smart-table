import { Component, Renderer, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { MultiSelectService } from './select-advanced-editor.service';
import { DefaultEditor } from '../default-editor';

@Component({
  selector: 'select-advanced-editor',
  styleUrls: ['./select-advanced-editor.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MultiSelectService],
  template: `
  test
    <div #selectContainer></div>
  `
})
export class MultiSelectComponent extends DefaultEditor implements OnInit, OnDestroy {

  multiple: boolean;
  options: Array<any>;
  name: string;
  selected: any;
  disabled: boolean;
  @ViewChild('selectContainer') selectContainer: ElementRef;
  // @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected multiSelectService: MultiSelectService,
    protected renderer: Renderer
  ) {
    super();
    console.log('sono io');
    
  }

  ngOnInit(): void {
    this.name = this.cell.getId();
    this.selected = this.cell.getValue();
    this.disabled = !this.cell.isEditable();
    this.multiple = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().multiple;
    this.options = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().list;

    this.simpleSelect();

    this.selectContainer.nativeElement.addEventListener('change', (data) => {
      // data.value can be either string or array
      // this.changed.emit(data.value);
      this.cell.setValue(data.value);
    });
  }

  simpleSelect(): void {
    this.multiSelectService.simpleSelect(this.selectContainer.nativeElement, this.disabled, this.options, this.selected, this.multiple);
  }

  ngOnDestroy(): void {
    this.selectContainer.nativeElement.removeEventListener('change');
  }
}