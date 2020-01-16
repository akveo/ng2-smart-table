import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
export declare class CompleterFilterComponent extends DefaultFilter implements OnInit {
    private completerService;
    completerContent: Subject<any>;
    constructor(completerService: CompleterService);
    ngOnInit(): void;
    inputTextChanged(event: string): void;
}
