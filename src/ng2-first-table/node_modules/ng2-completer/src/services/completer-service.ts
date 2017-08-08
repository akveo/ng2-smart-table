import {Injectable, Inject} from "@angular/core";
import { Observable } from "rxjs/Observable";

import {LocalData} from "./local-data";
import {RemoteData} from "./remote-data";


@Injectable()
export class CompleterService {
    constructor(
        @Inject(LocalData) private localDataFactory: any, // Using any instead of () => LocalData because on AoT errors
        @Inject(RemoteData) private remoteDataFactory: any // Using any instead of () => LocalData because on AoT errors
    ) { }

    public local(data: any[] | Observable<any>, searchFields: string | null = "", titleField: string | null = ""): LocalData {

        let localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    }

    public remote(url: string | null, searchFields: string | null = "", titleField: string | null = ""): RemoteData {

        let remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    }
}
