import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishedPageRoutingModule } from './finished-routing.module';

import { FinishedPage } from './finished.page';
import { FinishedElementComponent } from './finished-element/finished-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishedPageRoutingModule
  ],
  declarations: [FinishedPage, FinishedElementComponent]
})
export class FinishedPageModule {}
