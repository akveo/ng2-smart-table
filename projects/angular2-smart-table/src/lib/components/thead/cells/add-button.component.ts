import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output} from '@angular/core';

import {Grid} from '../../../lib/grid';
import {DataSource} from '../../../lib/data-source/data-source';
import {CreateEvent} from '../../../lib/events';
import {SecurityTrustType} from '../../../pipes/bypass-security-trust.pipe';

@Component({
    selector: '[angular2-st-add-button]',
    template: `
    <a *ngIf="visible" href="#" class="angular2-smart-action angular2-smart-action-add-add"
        [ngClass]="{'not-allowed': disabled}"
        [innerHTML]="addNewButtonContent | bypassSecurityTrust: bypassSecurityTrust" (click)="onAdd($event)"></a>
  `,
    standalone: false
})
export class AddButtonComponent implements AfterViewInit, OnChanges {

  @Input() grid!: Grid;
  @Input() source!: DataSource;
  @Output() create = new EventEmitter<CreateEvent>();

  hiddenWhenFunction: () => boolean = () => false;
  disabledWhenFunction: () => boolean = () => false;
  addNewButtonContent!: string;
  bypassSecurityTrust: SecurityTrustType = 'none';

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add('angular2-smart-actions-title', 'angular2-smart-actions-title-add');
  }

  get visible(): boolean {
    return !this.hiddenWhenFunction();
  }

  get disabled(): boolean {
    return this.disabledWhenFunction();
  }

  ngOnChanges() {
    this.addNewButtonContent = this.grid.settings.add?.addButtonContent ?? 'Add';
    this.bypassSecurityTrust = this.grid.settings.add?.sanitizer?.bypassHtml ? 'html' : 'none';

    this.disabledWhenFunction = this.grid.settings.add?.disabledWhen ?? this.disabledWhenFunction;
    const actions = this.grid.settings.actions;
    if (actions === false || actions === undefined) {
      this.hiddenWhenFunction = () => (actions === false);
    } else {
      this.hiddenWhenFunction = this.grid.settings.add?.hiddenWhen ?? (() => (actions.add === false));
    }
  }

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled) return;

    if (this.grid.settings.mode === 'external') {
      this.create.emit({
        source: this.source,
      });
    } else {
      this.grid.showCreateForm();
    }
  }
}
