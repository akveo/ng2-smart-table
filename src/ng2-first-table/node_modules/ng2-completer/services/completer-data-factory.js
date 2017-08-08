import { Http } from "@angular/http";
import { LocalData } from "./local-data";
import { RemoteData } from "./remote-data";
export function localDataFactory() {
    return function () {
        return new LocalData();
    };
}
export function remoteDataFactory(http) {
    return function () {
        return new RemoteData(http);
    };
}
export var LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
export var RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [Http] };
//# sourceMappingURL=completer-data-factory.js.map