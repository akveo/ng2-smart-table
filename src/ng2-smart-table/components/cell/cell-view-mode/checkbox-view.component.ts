import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'checkbox-view-component',
  template: `    
    <input type="checkbox"
           class="form-control"
           [checked] = "renderValue"
           onclick="return false;"/>
  `,
})
export class CheckboxViewComponent implements OnInit {

  @Input() cell: Cell;
  renderValue;

  constructor() {
  }

  ngOnInit() {
    this.renderValue = (this.cell.getValue() === true);
  }
}
