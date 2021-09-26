import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { TableService } from '../services/table.service';

@Directive({
  selector: '[ng2-resizer]'
})
export class Ng2ResizerDirective implements OnInit, OnDestroy {
  isClicked: boolean;

  parentElement: any;
  siblingElement: any;

  pointerOffset: number;
  parentOffset: number;
  siblingOffset: number;

  destroyed$ = new Subject<any>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private tableService: TableService) {
  }

  ngOnInit() {
    this.tableService.mouseMoveEvent$
      .pipe(
        takeUntil(this.destroyed$),
        filter(() => this.isClicked)
      )
      .subscribe((event: MouseEvent) => {
        const offset = this.pointerOffset - event.pageX;
        const width = this.parentOffset - offset;
        this.renderer.setStyle(this.parentElement, 'width', width + 'px');
        this.renderer.setStyle(this.siblingElement, 'width', this.siblingOffset + offset + 'px');
      });
  }

  @HostListener('mousedown', ['$event']) onMouseEnter(event: MouseEvent) {
    this.isClicked = true;
    this.parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    this.siblingElement = this.renderer.nextSibling(this.parentElement);
    this.pointerOffset = event.pageX;

    this.parentOffset = this.parentElement.offsetWidth;
    this.siblingOffset = this.siblingElement.offsetWidth;
  }

  @HostListener('document:mouseup') onMouseDown() {
    this.isClicked = false;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}
