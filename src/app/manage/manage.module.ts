import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage/manage.component';
import { MaterialModule } from '../share/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [],
  declarations: [ManageComponent]
})
export class ManageModule { }