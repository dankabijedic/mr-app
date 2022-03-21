import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InProgressPageRoutingModule } from './in-progress-routing.module';

import { InProgressPage } from './in-progress.page';
import { InProgressElementComponent } from './in-progress-element/in-progress-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressPageRoutingModule
  ],
  declarations: [InProgressPage, InProgressElementComponent]
})
export class InProgressPageModule {}
