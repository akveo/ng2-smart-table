import { Component, OnInit } from '@angular/core';
import { DefaultFilter } from './default-filter';
import { HttpClient } from "@angular/common/http";

export interface Config {
    dropdownList: Array<any>,
    selectedItems: Array<any>,
    dropdownSettings: DropdownSettings
}
export interface DropdownSettings {
    singleSelection?: boolean,
    text?: string,
    selectAllText?: string,
    unSelectAllText?: string,
    enableSearchFilter?: boolean,
    classes?: string
}

@Component({
    selector: 'mselect-filter',
    template: `<angular2-multiselect [data]="dropdownList" 
    [(ngModel)]="selectedItems" 
    [settings]="dropdownSettings" 
    (onSelect)="onItemSelect($event)"
    (onDeSelect)="OnItemDeSelect($event)" 
    (onSelectAll)="onSelectAll($event)" 
    (onDeSelectAll)="onDeSelectAll($event)">
    </angular2-multiselect>`
})
export class MselectFilterComponent extends DefaultFilter implements OnInit {
    dropdownList: Array<any> = [];
    selectedItems: Array<any> = [];
    dropdownSettings: DropdownSettings = {};

    constructor(private http: HttpClient) {
        super()
    }

    ngOnInit() {
        const config: Config = this.column.getFilterConfig();
        this.dropdownList = config.dropdownList || [];
        this.selectedItems = config.selectedItems || [];
        let setting = {
            singleSelection: false,
            text: "Select",
            selectAllText: "Select All",
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownSettings = Object.assign(setting, config.dropdownSettings);
    }
    onItemSelect(item: any) {
        this.updateQuery();
    }
    OnItemDeSelect(item: any) {
        this.updateQuery();
    }
    onSelectAll(items: any) {
        this.updateQuery();
    }
    onDeSelectAll(items: any) {
        this.updateQuery();
    }
    updateQuery() {
        this.query = this.selectedItems.map(item => item.id).join(";").replace(/ /g, '')
        this.setFilter()
    }
}
