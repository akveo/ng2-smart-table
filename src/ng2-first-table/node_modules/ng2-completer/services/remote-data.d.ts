import { EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { CompleterBaseData } from "./completer-base-data";
import { CompleterItem } from "../components/completer-item";
export declare class RemoteData extends CompleterBaseData {
    private http;
    dataSourceChange: EventEmitter<void>;
    private _remoteUrl;
    private remoteSearch;
    private _urlFormater;
    private _dataField;
    private _headers;
    private _requestOptions;
    constructor(http: Http);
    remoteUrl(remoteUrl: string): this;
    urlFormater(urlFormater: (term: string) => string): void;
    dataField(dataField: string): void;
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     */
    headers(headers: Headers): void;
    requestOptions(requestOptions: RequestOptions): void;
    search(term: string): void;
    cancel(): void;
    convertToItem(data: any): CompleterItem | null;
}
