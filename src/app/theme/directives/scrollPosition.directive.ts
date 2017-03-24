import { Directive, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollPosition]',
})
export class ScrollPositionDirective implements OnInit {

  @Input() maxHeight: number;

  @Output() scrollChange = new EventEmitter<any>();

  private isScrolled: boolean;

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this.isScrolled) {
      this.isScrolled = isScrolled;
      this.scrollChange.emit({
        scrolled: isScrolled,
        offset: window.scrollY,
      });
    }
  }

}
