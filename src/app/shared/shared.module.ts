import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/title/title.component';
import { FloatingComponent } from './components/floating/floating.component';

const c = [
  MainNavComponent,
  BannerComponent,
  TitleComponent,
  FloatingComponent,
];
@NgModule({
  declarations: [...c],
  imports: [CommonModule],
  exports: [...c],
})
export class SharedModule {}