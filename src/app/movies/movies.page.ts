import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Movie } from './movie.model';
import { MoviesModalComponent } from './movies-modal/movies-modal.component';
import { MoviesService } from './movies.service';
import { Subscription } from 'rxjs';
/*interface MovieData {
  name: string,
  rating: number,
  comment: string,
  imageUrl: string
}*/

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit, OnDestroy {

  /*  movies: Movie[] = [{ id: 'q1', name: 'Neki film', rating: '8', comment: 'Neki kom', imageUrl: 'data:image/jpeg;base64,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' },
      { id: 'q2', name: 'Jos neki film', rating: '7', comment: 'Neki kom', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWLe2eWrJM8_jvA30lj2Cwo3HQu_a3gCAZg&usqp=CAU' }
    ];
  */
  movies: Movie[];
  private movieSub: Subscription;

  constructor(private menuCtrl: MenuController, private moviesService: MoviesService, private modalCtrl: ModalController) {
    console.log('constructor');
    //   this.movies = this.moviesService.movies;*/
  }

  ngOnInit() {
    this.movieSub = this.moviesService.movies.subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  ionViewWillEnter() {
    this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      //   this.movies = movies;
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

  openModal() {
    this.modalCtrl.create({
      component: MoviesModalComponent,
      componentProps: { title: 'Add a movie' }
    }).then((modal: HTMLIonModalElement) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
        this.moviesService.addMovie(resultData.data.movieData.name, resultData.data.movieData.rating, resultData.data.movieData.comment, resultData.data.movieData.imageUrl).subscribe((movies) => {
          //      this.movies = movies;
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }

    /*ngViewWillEnter() {
      console.log('ionViewWillEnter');
    }
  
    ngViewDidEnter() {
      console.log('ionViewDidEnter');
    }
  
    ngViewWillLeave() {
      console.log('ionViewWillLeave');
    }
  
    ngViewDidLeave() {
      console.log('ionViewDidLeave');
    }
  
    ngOnDestroy() {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  
    }*/
  }
}

