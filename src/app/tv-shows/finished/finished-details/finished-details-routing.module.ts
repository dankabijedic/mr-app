import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedDetailsPage } from './finished-details.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishedDetailsPageRoutingModule {}
