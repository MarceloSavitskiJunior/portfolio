import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    BannerComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentComponent
  ],
})
export class ContentModule { }
