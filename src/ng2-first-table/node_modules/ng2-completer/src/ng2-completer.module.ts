import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CompleterCmp } from "./components/completer-cmp";
import { CompleterListItemCmp } from "./components/completer-list-item-cmp";
import { CompleterService } from "./services/completer-service";
import { LocalDataFactoryProvider, RemoteDataFactoryProvider } from "./services/completer-data-factory";
import { CtrCompleter } from "./directives/ctr-completer";
import { CtrDropdown } from "./directives/ctr-dropdown";
import { CtrInput } from "./directives/ctr-input";
import { CtrList } from "./directives/ctr-list";
import { CtrRow } from "./directives/ctr-row";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        CompleterListItemCmp,
        CtrCompleter,
        CtrDropdown,
        CtrInput,
        CtrList,
        CtrRow,
        CompleterCmp
    ],
    exports: [
        CompleterCmp,
        CompleterListItemCmp,
        CtrCompleter,
        CtrDropdown,
        CtrInput,
        CtrList,
        CtrRow
    ],
    providers: [
        CompleterService,
        LocalDataFactoryProvider,
        RemoteDataFactoryProvider
    ]
})
export class Ng2CompleterModule { }
