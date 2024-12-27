import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {TableService} from '../services/table.service';
import {Column} from "../lib/data-set/column";

@Directive({
    selector: '[angular2SmartTableResizer]',
    standalone: false
})
export class NgxResizerDirective implements OnInit, OnDestroy {
  @Input() angular2SmartTableResizer!: {column: Column, siblingColumn: Column | undefined};

  isClicked!: boolean;

  parentElement: any;
  siblingElement: any;

  pointerOffset: number = 0;
  parentOffset: number = 0;
  siblingOffset: number | undefined = undefined;

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
        this.angular2SmartTableResizer.column.resizedWidth = width;
        this.renderer.setStyle(this.parentElement, 'width', width + 'px');

        const siblingColumn = this.angular2SmartTableResizer.siblingColumn;
        if (siblingColumn !== undefined && this.siblingOffset !== undefined) {
          const siblingWidth = this.siblingOffset + offset;
          siblingColumn.resizedWidth = siblingWidth;
          this.renderer.setStyle(this.siblingElement, 'width', siblingWidth + 'px');
        }
      });
  }

  @HostListener('mousedown', ['$event']) onMouseEnter(event: MouseEvent) {
    this.isClicked = true;
    this.parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    this.siblingElement = this.renderer.nextSibling(this.parentElement);
    this.pointerOffset = event.pageX;

    this.parentOffset = this.parentElement.offsetWidth;
    this.siblingOffset = this.siblingElement?.offsetWidth;
  }

  @HostListener('document:mouseup') onMouseDown() {
    this.isClicked = false;
  }

  ngOnDestroy() {
    this.destroyed$.next(null);
  }
}
