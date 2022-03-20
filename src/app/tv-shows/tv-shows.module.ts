import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvShowsPageRoutingModule } from './tv-shows-routing.module';

import { TvShowsPage } from './tv-shows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvShowsPageRoutingModule
  ],
  declarations: [TvShowsPage]
})
export class TvShowsPageModule {}
