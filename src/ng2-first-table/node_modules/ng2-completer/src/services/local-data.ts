import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";

import { CompleterBaseData } from "./completer-base-data";
import { CompleterItem } from "../components/completer-item";

@Injectable()
export class LocalData extends CompleterBaseData {

    public dataSourceChange: EventEmitter<void> = new EventEmitter<void>();

    private _data: any[];
    private savedTerm: string | null;

    constructor() {
        super();
    }

    public data(data: any[] | Observable<any[]>) {
        if (data instanceof Observable) {
            const data$ = <Observable<any[]>>data;
            data$
                .catch(() => [])
                .subscribe((res) => {
                    this._data = res;
                    if (this.savedTerm) {
                        this.search(this.savedTerm);
                    }
                    this.dataSourceChange.emit();
                });
        } else {
            this._data = <any[]>data;
        }

        this.dataSourceChange.emit();

        return this;
    }

    public search(term: string): void {
        if (!this._data) {
            this.savedTerm = term;
        } else {
            this.savedTerm = null;
            let matches: any[] = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    }

    public convertToItem(data: any): CompleterItem | null {
        return super.convertToItem(data);
    }
}
