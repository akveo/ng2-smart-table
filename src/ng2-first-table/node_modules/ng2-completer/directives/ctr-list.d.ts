import "rxjs/add/observable/timer";
import { ChangeDetectorRef, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/do";
import { CtrCompleter, CompleterList } from "./ctr-completer";
import { CompleterData } from "../services/completer-data";
import { CompleterItem } from "../components/completer-item";
export declare class CtrListContext {
    results: CompleterItem[] | null;
    searching: boolean;
    searchInitialized: boolean;
    isOpen: boolean;
    constructor(results: CompleterItem[] | null, searching: boolean, searchInitialized: boolean, isOpen: boolean);
}
export declare class CtrList implements OnInit, CompleterList {
    private completer;
    private templateRef;
    private viewContainer;
    private cd;
    ctrListMinSearchLength: number;
    ctrListPause: number;
    ctrListAutoMatch: boolean;
    ctrListAutoHighlight: boolean;
    ctrListDisplaySearching: boolean;
    private _dataService;
    private term;
    private searchTimer;
    private clearTimer;
    private ctx;
    private _initialValue;
    private viewRef;
    constructor(completer: CtrCompleter, templateRef: TemplateRef<CtrListContext>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    dataService: CompleterData;
    initialValue: any;
    search(term: string): void;
    clear(): void;
    open(): void;
    isOpen(open: boolean): void;
    private _clear();
    private searchTimerComplete(term);
    private refreshTemplate();
    private getBestMatchIndex();
    private dataServiceSubscribe();
}
