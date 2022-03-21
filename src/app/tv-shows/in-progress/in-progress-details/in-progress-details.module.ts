import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressDetailsPageRoutingModule } from './in-progress-details-routing.module';

import { InProgressDetailsPage } from './in-progress-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressDetailsPageRoutingModule
  ],
  declarations: [InProgressDetailsPage]
})
export class InProgressDetailsPageModule {}
