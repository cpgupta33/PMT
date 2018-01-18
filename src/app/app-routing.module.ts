import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PagenotfoundComponent } from './share/components/pagenotfound/pagenotfound.component' ;
import { SelectivePreloadingStrategy } from './core/services/selective-preloading-strategy';

const appRoutes: Routes  = [
    { path: '', redirectTo: '/manage' , pathMatch: 'full'},
    { path: 'manage', loadChildren: './manage/manage.module#ManageModule', data: { preload: true }},
    { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy // <-- PreloadAllModules to use all bydefault
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}