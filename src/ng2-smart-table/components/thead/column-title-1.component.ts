import { Component, Input } from '@angular/core';

import { Grid } from '../../lib/grid';

@Component({
  selector: 'column-title-1-ng2-st',
  template: `
    <th class="ng2-smart-actions">
      <div class="ng2-smart-title">{{ grid.getSetting('actions.columnTitle') }}xxxxxxxxxxxxxxxxx</div>
    </th>
  `
})
export class ColumnTitle1Component {

  @Input() grid: Grid;
}
