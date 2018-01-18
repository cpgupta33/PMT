import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PagenotfoundComponent],
  exports: [ CommonModule, PagenotfoundComponent ]
})
export class ShareModule { }