import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './share/pagenotfound/pagenotfound.component' ;

const appRoutes: Routes  = [
    { path: 'manage', loadChildren: './manage/manage.module#ManageModule'},
    { path: '', redirectTo: '/manage' , pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}