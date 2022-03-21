import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedPage } from './finished.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedPage
  },
  {
    path: ':finishedId',
    loadChildren: () => import('./finished-details/finished-details.module').then( m => m.FinishedDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishedPageRoutingModule {}
