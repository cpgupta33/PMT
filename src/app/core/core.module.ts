import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectivePreloadingStrategy } from './services/selective-preloading-strategy';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [SelectivePreloadingStrategy]
})
export class CoreModule { }