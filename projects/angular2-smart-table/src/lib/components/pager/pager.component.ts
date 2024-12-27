import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';

import {DataSource, DataSourceChangeEvent} from '../../lib/data-source/data-source';

@Component({
    selector: 'angular2-smart-table-pager',
    styleUrls: ['./pager.component.scss'],
    template: `
    <nav *ngIf="shouldShow()" class="angular2-smart-pagination-nav">
      <ul class="angular2-smart-pagination pagination">
        <li class="angular2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="angular2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="angular2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="angular2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="angular2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="angular2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="angular2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="angular2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="angular2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>

        <li class="angular2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="angular2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    <div *ngIf="!shouldShow()"><!-- placeholder to consume the space of the page selection --></div>

    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="angular2-smart-pagination-per-page">
      <label for="per-page" *ngIf="perPageSelectLabel">{{perPageSelectLabel}}</label>
      <select (change)="onChangePerPage($event)" [value]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `,
    standalone: false
})
export class PagerComponent implements OnChanges {

  @Input() source!: DataSource;
  @Input() perPageSelect!: number[];
  @Input() perPageSelectLabel!: string;

  currentPerPage!: any;

  protected pages!: Array<any>;
  protected page!: number;
  protected count: number = 0;
  protected perPage!: number;

  protected dataChangedSub!: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        this.page = this.source.getPaging().page;
        this.perPage = this.source.getPaging().perPage;
        this.currentPerPage = this.perPage;
        this.count = this.source.count();
        if (this.isPageOutOfBounds()) {
          this.source.setPage(--this.page);
        }

        this.processPageChange(dataChanges);
        this.initPages();
      });
    }
  }

  /**
   * We change the page here depending on the action performed against data source
   * if a new element was added to the end of the table - then change the page to the last
   * if a new element was added to the beginning of the table - then to the first page
   * @param changes
   */
  processPageChange(changes: DataSourceChangeEvent) {
    if (changes.action === 'prepend') {
      this.source.setPage(1);
    }
    if (changes.action === 'append') {
      this.source.setPage(this.getLast());
    }
  }

  shouldShow(): boolean {
    return this.source.count() > this.perPage;
  }

  paginate(page: number): boolean {
    this.source.setPage(page);
    this.page = page;
    return false;
  }

  next(): boolean {
    return this.paginate(this.getPage() + 1);
  }

  prev(): boolean {
    return this.paginate(this.getPage() - 1);
  }

  getPage(): number {
    return this.page;
  }

  getPages(): Array<any> {
    return this.pages;
  }

  getLast(): number {
    return Math.ceil(this.count / this.perPage);
  }

  isPageOutOfBounds(): boolean {
    return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
  }

  initPages() {
    const pagesCount = this.getLast();
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this.pages = [];

    if (this.shouldShow()) {

      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this.page >= middleOne ? this.page : middleOne;

      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;

      const firstOne = lastOne - showPagesCount + 1;

      for (let i = firstOne; i <= lastOne; i++) {
        this.pages.push(i);
      }
    }
  }

  onChangePerPage(event: any) {
    if (this.currentPerPage) {
      this.source.getPaging().perPage = this.currentPerPage * 1;
      this.source.refresh();
      this.initPages();
    }
  }

}
