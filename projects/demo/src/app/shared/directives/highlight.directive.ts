import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import * as hljs from 'highlight.js';

@Directive({
  selector: 'code[highlight]',
})
export class HighlightCodeDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    hljs.default.highlightBlock(this.elRef.nativeElement);
  }

}
