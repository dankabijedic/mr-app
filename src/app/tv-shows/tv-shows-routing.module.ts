import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowsPage } from './tv-shows.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TvShowsPage,
    children: [
      {
        path: 'in-progress',
        loadChildren: () => import('./in-progress/in-progress.module').then(m => m.InProgressPageModule)
      },
      {
        path: 'finished',
        loadChildren: () => import('./finished/finished.module').then(m => m.FinishedPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsPageRoutingModule {}
