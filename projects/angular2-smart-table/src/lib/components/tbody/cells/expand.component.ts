import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
import {Row} from "../../../lib/data-set/row";
import {Grid} from "../../../lib/grid";
import {SecurityTrustType} from '../../../pipes/bypass-security-trust.pipe';

@Component({
    selector: 'angular2-st-tbody-expand',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <a *ngIf="visible" href="#" class="angular2-smart-action angular2-smart-action-expand-expand"
         [ngClass]="{'not-allowed': disabled}"
         [innerHTML]="buttonContent | bypassSecurityTrust: bypassSecurityTrust" (click)="onExpand($event)"></a>
    `,
    standalone: false
})
  export class TbodyExpandRowComponent implements OnChanges {

    @Input() grid!: Grid;
    @Input() row!: Row;

    @Output() onExpandRow = new EventEmitter<any>();

    buttonContent!: string;
    bypassSecurityTrust: SecurityTrustType = 'none';

    hiddenWhenFunction: (row: Row) => boolean = (_) => false;
    disabledWhenFunction: (row: Row) => boolean = (_) => false;

    constructor(){
    }

    get visible(): boolean {
      return !this.hiddenWhenFunction(this.row);
    }

    get disabled(): boolean {
      return this.disabledWhenFunction(this.row);
    }

    onExpand(event: any) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.disabled) {
          this.onExpandRow.emit(this.row);
        }
    }


    ngOnChanges() {
        this.buttonContent = this.grid.settings.expand?.buttonContent ?? 'Expand';
        this.bypassSecurityTrust = this.grid.settings.expand?.sanitizer?.bypassHtml ? 'html' : 'none';

        this.hiddenWhenFunction = this.grid.settings.expand?.hiddenWhen ?? this.hiddenWhenFunction;
        this.disabledWhenFunction = this.grid.settings.expand?.disabledWhen ?? this.disabledWhenFunction;
    }
  }
