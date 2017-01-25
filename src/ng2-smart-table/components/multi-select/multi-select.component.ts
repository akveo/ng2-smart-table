import { Component, Renderer, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { MultiSelectService } from './multi-select.service';

@Component({
  selector: 'ng2-smart-multi-select',
  styles: [require('./multi-select.scss')],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div #selectContainer></div>
  `
})
export class MultiSelectComponent implements OnInit, OnDestroy {

  @ViewChild('selectContainer') selectContainer: ElementRef;
  @Input() type: 'single-select' | 'multi-select' | 'html';
  @Input() options: Array<any>;
  @Input() name: string;
  @Input() selected: any;
  @Input() disabled: boolean;
  @Output() changed = new EventEmitter();

  constructor(
    protected multiSelectService: MultiSelectService,
    protected renderer: Renderer
  ) { }

  ngOnInit(): void {
    switch (this.type) {
      case 'single-select': return this.singleSelect();
      default: this.singleSelect();
    }

    this.selectContainer.nativeElement.addEventListener('change', (data) => {
      this.changed.emit(data.value);
    })
  }

  singleSelect(): void {
    this.multiSelectService.single(this.selectContainer.nativeElement, this.disabled, this.options, this.selected);
  }

  ngOnDestroy(): void {
    this.selectContainer.nativeElement.removeEventListener('change');
  }
}