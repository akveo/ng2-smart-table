import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CompleterService } from 'ng2-completer';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'table-cell-edit-mode',
  templateUrl: `
    <div [ngSwitch]="cell.getColumn().editor?.type">
        <select *ngSwitchCase="'list'" [ngClass]="inputClass"
                class="form-control"
                [(ngModel)]="cell.newValue"
                [name]="cell.getColumn().id"
                [disabled]="!cell.getColumn().isEditable"
                (click)="onClick($event)"
                (keydown.enter)="onEdited($event)"
                (keydown.esc)="onStopEditing()">

            <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                    [selected]="option.value === cell.getValue()">{{ option.title }}
            </option>
        </select>

        <ng2-completer *ngSwitchCase="'completer'"
                       [(ngModel)]="completerStr"
                       [dataService]="cell.getColumn().getConfig().completer.dataService"
                       [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                       [pause]="cell.getColumn().getConfig().completer.pause || 0"
                       [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                       (selected)="onEditedCompleter($event)">
        </ng2-completer>

        <input *ngSwitchDefault [ngClass]="inputClass"
               class="form-control"
               [(ngModel)]="cell.newValue"
               [name]="cell.getColumn().id"
               [placeholder]="cell.getColumn().title"
               [disabled]="!cell.getColumn().isEditable"
               (click)="onClick($event)"
               (keydown.enter)="onEdited($event)"
               (keydown.esc)="onStopEditing()">
    </div>
    `
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
}