import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {distinctUntilChanged, debounceTime, skip} from 'rxjs/operators';

import {DefaultFilter} from './default-filter';

@Component({
    selector: 'select-filter',
    template: `
        <select [ngClass]="inputClass"
                class="form-control"
                [formControl]="inputControl">

            <option value="">{{ column.getFilterConfig().selectText }}</option>
            <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
                {{ option.title }}
            </option>
        </select>
    `,
})
export class SelectFilterComponent extends DefaultFilter implements OnInit {

    inputControl = new FormControl();

    constructor() {
        super();
    }

    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(
                skip(1),
                distinctUntilChanged(),
                debounceTime(this.delay),
            )
            .subscribe((value: string) => {
                this.query = this.inputControl.value;
                this.setFilter();
            });
    }
}
