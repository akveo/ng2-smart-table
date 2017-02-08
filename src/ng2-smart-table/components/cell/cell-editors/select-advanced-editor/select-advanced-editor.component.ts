import { Component, Renderer, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { MultiSelectService } from './multi-select.service';

@Component({
  selector: 'ng2-smart-multi-select',
  styles: [require('./select-advanced-editor.scss')],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div #selectContainer></div>
  `
})
export class MultiSelectComponent implements OnInit, OnDestroy {

  @ViewChild('selectContainer') selectContainer: ElementRef;
  @Input() multiple: boolean;
  @Input() html: boolean;
  @Input() options: Array<any>;
  @Input() name: string;
  @Input() selected: any;
  @Input() disabled: boolean;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected multiSelectService: MultiSelectService,
    protected renderer: Renderer
  ) { }

  ngOnInit(): void {
    if (!this.html) this.simpleSelect();

    this.selectContainer.nativeElement.addEventListener('change', (data) => {
      // data.value can be either string or array
      this.changed.emit(data.value);
    })
  }

  simpleSelect(): void {
    this.multiSelectService.simpleSelect(this.selectContainer.nativeElement, this.disabled, this.options, this.selected, this.multiple);
  }

  ngOnDestroy(): void {
    this.selectContainer.nativeElement.removeEventListener('change');
  }
}