import { Http } from "@angular/http";
import { LocalData } from "./local-data";
import { RemoteData } from "./remote-data";
export declare function localDataFactory(): () => LocalData;
export declare function remoteDataFactory(http: Http): () => RemoteData;
export declare let LocalDataFactoryProvider: {
    provide: typeof LocalData;
    useFactory: () => () => LocalData;
};
export declare let RemoteDataFactoryProvider: {
    provide: typeof RemoteData;
    useFactory: (http: Http) => () => RemoteData;
    deps: typeof Http[];
};
