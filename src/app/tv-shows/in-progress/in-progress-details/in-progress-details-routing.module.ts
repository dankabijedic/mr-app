import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InProgressDetailsPage } from './in-progress-details.page';

const routes: Routes = [
  {
    path: '',
    component: InProgressDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InProgressDetailsPageRoutingModule {}
