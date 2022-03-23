import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';

import { MoviesPage } from './movies.page';
import { MoviesModalComponent } from './movies-modal/movies-modal.component';
import { MovieElementComponent } from './movie-element/movie-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule
  ],
  declarations: [MoviesPage, MovieElementComponent, MoviesModalComponent],
  entryComponents: [MoviesModalComponent]
})
export class MoviesPageModule {}
