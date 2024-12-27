import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

import {Column} from '../../../lib/data-set/column';
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
    template: '',
    standalone: false
})
export class DefaultFilter implements Filter, OnInit, OnDestroy {

  subject = new Subject<string>();
  changesSubscription?: Subscription;
  @Input() query: string = '';
  @Input() inputClass!: string;
  @Input() debounceTime: number = 300;
  @Input() column!: Column;
  @Output() filter = new EventEmitter<string>();

  ngOnInit() {
    this.changesSubscription = this.subject
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.debounceTime),
      )
      .subscribe(value => this.setFilter());
  }

  ngOnDestroy() {
    this.changesSubscription?.unsubscribe();
  }

  onValueChanged(value: string) {
    this.query = value;
    this.subject.next(value);
  }

  setFilter() {
    this.filter.emit(this.query);
  }
}

export interface Filter {
  debounceTime: number;
  changesSubscription?: Subscription;
  query: string;
  inputClass: string;
  column: Column;
  filter: EventEmitter<string>;
}
