import { OnInit } from "@angular/core";
export interface MatchPart {
    isMatch: boolean;
    text: string;
}
export declare class CompleterListItemCmp implements OnInit {
    text: string;
    searchStr: string;
    matchClass: string;
    type: string;
    parts: MatchPart[];
    ngOnInit(): void;
}
