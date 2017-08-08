import "rxjs/add/observable/timer";
import { ChangeDetectorRef, Directive, EmbeddedViewRef, Host, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/do";

import { CtrCompleter, CompleterList } from "./ctr-completer";
import { CompleterData } from "../services/completer-data";
import { CompleterItem } from "../components/completer-item";
import { MIN_SEARCH_LENGTH, PAUSE, CLEAR_TIMEOUT, isNil } from "../globals";


export class CtrListContext {
    constructor(
        public results: CompleterItem[] | null,
        public searching: boolean,
        public searchInitialized: boolean,
        public isOpen: boolean
    ) { }
}

@Directive({
    selector: "[ctrList]",
})
export class CtrList implements OnInit, CompleterList {
    @Input() public ctrListMinSearchLength = MIN_SEARCH_LENGTH;
    @Input() public ctrListPause = PAUSE;
    @Input() public ctrListAutoMatch = false;
    @Input() public ctrListAutoHighlight = false;
    @Input() public ctrListDisplaySearching = true;

    private _dataService: CompleterData;
    // private results: CompleterItem[] = [];
    private term: string | null = null;
    // private searching = false;
    private searchTimer: Subscription | null = null;
    private clearTimer: Subscription | null = null;
    private ctx = new CtrListContext([], false, false, false);
    private _initialValue: any = null;
    private viewRef: EmbeddedViewRef<CtrListContext> | null = null;

    constructor(
        @Host() private completer: CtrCompleter,
        private templateRef: TemplateRef<CtrListContext>,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef) { }

    public ngOnInit() {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(
            this.templateRef,
            new CtrListContext([], false, false, false)
        );
    }

    @Input("ctrList")
    public set dataService(newService: CompleterData) {
        this._dataService = newService;
        this.dataServiceSubscribe();
    }

    @Input("ctrListInitialValue")
    public set initialValue(value: any) {
        if (this._dataService && typeof this._dataService.convertToItem === "function") {
            setTimeout(() => {
                const initialItem = this._dataService.convertToItem!(value);
                if (initialItem) {
                    this.completer.onSelected(initialItem, false);
                }
            });
        } else if (!this._dataService) {
            this._initialValue = value;
        }
    }

    public search(term: string) {
        if (!isNil(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                    this.ctx.results = [];
                }
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = Observable.timer(this.ctrListPause).subscribe(() => {
                this.searchTimerComplete(term);
            });
        } else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
            this.clear();
            this.term = "";
        }
    }

    public clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = Observable.timer(CLEAR_TIMEOUT).subscribe(() => {
            this._clear();
        });
    }

    public open() {
        if (!this.ctx.searchInitialized) {
            this.search("");
        }
        this.refreshTemplate();
    }

    public isOpen(open: boolean) {
        this.ctx.isOpen = open;
    }

    private _clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }

        this.viewContainer.clear();
        this.viewRef = null;
    }

    private searchTimerComplete(term: string) {
        // Begin the search
        if (isNil(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    }

    private refreshTemplate() {
        // create the template if it doesn't exist
        if (!this.viewRef) {
            this.viewRef = this.viewContainer.createEmbeddedView(
                this.templateRef,
                this.ctx
            );
        } else {
            // refresh the template
            this.viewRef!.context.isOpen = this.ctx.isOpen;
            this.viewRef!.context.results = this.ctx.results;
            this.viewRef!.context.searching = this.ctx.searching;
            this.viewRef!.context.searchInitialized = this.ctx.searchInitialized;
            this.viewRef.detectChanges();
        }
        this.cd.markForCheck();
    }

    private getBestMatchIndex() {
        if (!this.ctx.results || !this.term) {
            return null;
        }

        // First try to find the exact term
        let bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase() === this.term!.toLocaleLowerCase());
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().startsWith(this.term!.toLocaleLowerCase()));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().includes(this.term!.toLocaleLowerCase()));
        }

        return bestMatch < 0 ? null : bestMatch;
    }

    private dataServiceSubscribe() {
        if (this._dataService) {
            this._dataService
                .catch(err => {
                    console.error(err);
                    console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                    return [];
                })
                .subscribe(results => {
                    this.ctx.searchInitialized = true;
                    this.ctx.searching = false;
                    this.ctx.results = results;

                    if (this.ctrListAutoMatch && results && results.length === 1 && results[0].title && !isNil(this.term) &&
                        results[0].title.toLocaleLowerCase() === this.term!.toLocaleLowerCase()) {
                        // Do automatch
                        this.completer.onSelected(results[0]);
                        return;
                    }

                    if (this._initialValue) {
                        this.initialValue = this._initialValue;
                        this._initialValue = null;
                    }

                    this.refreshTemplate();

                    if (this.ctrListAutoHighlight) {
                        this.completer.autoHighlightIndex = this.getBestMatchIndex();
                    }
                });

            if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(() => {
                    this.term = null;
                    this.ctx.searchInitialized = false;
                    this.ctx.searching = false;
                    this.ctx.results = [];
                    this.refreshTemplate();
                    this.completer.onDataSourceChange();
                });
            }
        }
    }

}
