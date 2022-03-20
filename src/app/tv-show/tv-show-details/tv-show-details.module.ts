import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvShowDetailsPageRoutingModule } from './tv-show-details-routing.module';

import { TvShowDetailsPage } from './tv-show-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvShowDetailsPageRoutingModule
  ],
  declarations: [TvShowDetailsPage]
})
export class TvShowDetailsPageModule {}
