import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageRoutingModule
  ],
  exports: [],
  declarations: [ManageComponent]
})
export class ManageModule { }