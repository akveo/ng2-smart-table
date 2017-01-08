import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CompleterService } from 'ng2-completer';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'ng2-smart-table-cell',
  styles: [require('./cell.scss')],
  template: require('./cell.component.html')
})
export class CellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('cellContainer') cellRef: ElementRef;

  completerStr: string = '';

  constructor(private completerService: CompleterService) {
  }

  ngOnInit(): void {
    if (this.cell.getColumn().type === 'completer') {
      let config = this.cell.getColumn().getConfig().completer;
      config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
      config.dataService.descriptionField(config.descriptionField);
    }
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    this.cancelEdit();
    return false;
  }

  cancelEdit(): void {
    this.renderCustomValue();
  }

  ngOnChanges(changes): void {
    setTimeout(() => this.renderCustomValue());
  }

  ngAfterViewInit(): void {
    this.renderCustomValue();
  }

  onEdited(event): boolean {
    this.edited.emit(event);
    return false;
  }

  onEditedCompleter(event): boolean {
    this.cell.newValue = event.title;
    return false;
  }

  onClick(event): void {
    event.stopPropagation();
  }

  protected renderCustomValue(): void {
    const cellRenderFunc = this.cell.getColumn().getCellRenderFunction();

    if (cellRenderFunc && this.cellRef) {
      cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement)
    }
  }
}
