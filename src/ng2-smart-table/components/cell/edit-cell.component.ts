import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CompleterService } from 'ng2-completer';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'table-cell-edit-mode',
  styleUrls: ['edit-cell.component.scss'],
  templateUrl: 'edit-cell.component.html',
})
export class EditCellComponent {

  @Input() cell: Cell;
  @Input() inputClass: string = '';

  @Output() public edited: EventEmitter<any> = new EventEmitter<any>();

  completerStr: string = '';

  constructor(private completerService: CompleterService) {
  }

  ngOnInit(): void {
    if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
      let config = this.cell.getColumn().getConfig().completer;
      config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
      config.dataService.descriptionField(config.descriptionField);
    }
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


  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }
}
