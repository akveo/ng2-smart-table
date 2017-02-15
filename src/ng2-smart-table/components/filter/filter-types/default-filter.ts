import { Input, Output, EventEmitter } from '@angular/core';

import { Column } from '../../../lib/data-set/column';

export class DefaultFilter implements Filter {

  @Input() column: Column;
  @Input() inputClass: string;
  @Output() valueChange = new EventEmitter<string>();
}

export interface Filter {
  column: Column;
  inputClass: string;
  valueChange: EventEmitter<string>;
}
