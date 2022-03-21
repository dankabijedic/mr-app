import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InProgressPage } from './in-progress.page';

const routes: Routes = [
  {
    path: '',
    component: InProgressPage
  },
  {
    path: ':inprogressId',
    loadChildren: () => import('./in-progress-details/in-progress-details.module').then( m => m.InProgressDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InProgressPageRoutingModule {}
