import {Directive, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[scrollPosition]'
})
export class ScrollPositionDirective {

  @Input() public maxHeight:number;
  @Output() public scrollChange:EventEmitter<any> = new EventEmitter<any>();

  private _isScrolled:boolean;

  public ngOnInit():void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll():void {
    let isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit({
        scrolled: isScrolled,
        offset: window.scrollY
      });
    }
  }
}