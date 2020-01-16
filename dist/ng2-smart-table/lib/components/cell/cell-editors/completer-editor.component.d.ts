import { OnInit } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
export declare class CompleterEditorComponent extends DefaultEditor implements OnInit {
    private completerService;
    completerStr: string;
    constructor(completerService: CompleterService);
    ngOnInit(): void;
    onEditedCompleter(event: {
        title: '';
    }): boolean;
}
