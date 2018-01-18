import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagenotfoundComponent],
  exports: [ CommonModule, PagenotfoundComponent ]
})
export class ShareModule { }