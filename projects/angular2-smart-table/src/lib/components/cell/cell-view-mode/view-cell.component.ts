import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Cell} from '../../../lib/data-set/cell';
import {SecurityTrustType} from '../../../pipes/bypass-security-trust.pipe';

@Component({
    selector: 'table-cell-view-mode',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue() | bypassSecurityTrust: bypassSecurityTrust" [ngClass]="cssClass"></div>
        <div *ngSwitchDefault [ngClass]="cssClass">{{ cell.getValue() }}</div>
    </div>
    `,
    standalone: false
})
export class ViewCellComponent {

  @Input() cell!: Cell;

  get bypassSecurityTrust(): SecurityTrustType {
    return this.cell.getColumn().sanitizer.bypassHtml ? 'html' : 'none';
  }

  get cssClass(): string {
    return this.cell.getColumn().classContent;
  }
}
