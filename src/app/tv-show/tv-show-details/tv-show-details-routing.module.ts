import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowDetailsPage } from './tv-show-details.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowDetailsPageRoutingModule {}
