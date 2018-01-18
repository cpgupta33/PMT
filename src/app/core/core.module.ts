import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectivePreloadingStrategy } from './services/selective-preloading-strategy';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../share/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [ToolbarComponent, SidenavComponent],
  exports: [ToolbarComponent, SidenavComponent],
  providers: [SelectivePreloadingStrategy]
})
export class CoreModule { }