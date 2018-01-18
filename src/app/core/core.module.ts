import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectivePreloadingStrategy } from './services/selective-preloading-strategy';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolbarComponent, SidenavComponent],
  exports: [ToolbarComponent],
  providers: [SelectivePreloadingStrategy]
})
export class CoreModule { }