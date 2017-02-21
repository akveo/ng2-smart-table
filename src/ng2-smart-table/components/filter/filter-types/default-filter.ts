import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Column } from '../../../lib/data-set/column';

export class DefaultFilter implements Filter, OnDestroy {

  delay: number = 300;
  changesSubscription: Subscription;
  @ViewChild('filterEl') filterEl: ElementRef;
  @Input() query: string;
  @Input() inputClass: string;
  @Input() column: Column;
  @Output() filter = new EventEmitter<string>();

  setupFilter(
    event: string,
    filterFn: (ev: any) => boolean = (ev: any) => ev,
    mapFn: (ev: any) => any = (ev: any) => ev.target.value) {
      return Observable.fromEvent(this.filterEl.nativeElement, event)
        .filter(filterFn)
        .map(mapFn)
        .distinctUntilChanged()
        .debounceTime(this.delay);
  }

  ngOnDestroy() {
    if (this.changesSubscription)
      this.changesSubscription.unsubscribe();
  }

  setFilter() {
    this.filter.emit(this.query);
  }
}

export interface Filter {

  delay: number;
  changesSubscription: Subscription;
  filterEl: ElementRef;
  query: string;
  inputClass: string;
  column: Column;
  filter: EventEmitter<string>;
}
