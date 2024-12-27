import {Component, EventEmitter, HostListener, Input, OnChanges, Output} from '@angular/core';

import {Grid} from '../../lib/grid';
import {DataSource} from '../../lib/data-source/data-source';
import {TableService} from '../../services/table.service';
import {CreateCancelEvent, CreateConfirmEvent, CreateEvent} from '../../lib/events';

@Component({
    selector: '[angular2-st-thead]',
    styleUrls: ['./thead.component.scss'],
    templateUrl: './thead.component.html',
    standalone: false
})
export class NgxSmartTableTheadComponent implements OnChanges {

  @Input() grid!: Grid;
  @Input() source!: DataSource;
  @Input() isAllSelected!: boolean;
  @Input() createConfirm!: EventEmitter<CreateConfirmEvent>;
  @Input() createCancel!: EventEmitter<CreateCancelEvent>;

  @Output() hide = new EventEmitter<string>();
  @Output() selectAllRows = new EventEmitter<void>();
  @Output() create = new EventEmitter<CreateEvent>();

  isHideHeader!: boolean;
  isHideSubHeader!: boolean;

  constructor(private tableService: TableService) {
  }

  ngOnChanges() {
    this.isHideHeader = this.grid.settings.hideHeader ?? false;
    this.isHideSubHeader = this.grid.settings.hideSubHeader ?? false;
  }

  @HostListener('mousemove', ['$event'])
  mouseMove(event: MouseEvent) {
    this.tableService.mouseMoveEvent$.next(event);
  }
}
