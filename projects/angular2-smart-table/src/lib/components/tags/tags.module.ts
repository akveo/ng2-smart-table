import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagComponent} from './tag/tag.component';
import {TagsListComponent} from './tags-list/tags-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TagComponent,
    TagsListComponent
  ],
  exports: [
    TagComponent,
    TagsListComponent
  ],
})
export class TagsModule { }
