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

  setupFilter(event: string, filterFn: (ev: any) => boolean = (ev: any) => ev) {
    this.changesSubscription = Observable.fromEvent(this.filterEl.nativeElement, event)
      .filter(filterFn)
      .map((ev: any) => ev.target.value)
      .distinctUntilChanged()
      .debounceTime(this.delay)
      .do((ev: any) => console.log('event', ev))
      .subscribe((value: string) => this.setFilter());
  }

  ngOnDestroy() {
    this.changesSubscription.unsubscribe();
  }

  private setFilter() {
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

  // setupFilter: (event: string, filterFn: (ev: any) => boolean) => void;
  // ngOnDestroy: () => void;
  // setFilter: () => void;
  // ngOnInit: () => void;
}
