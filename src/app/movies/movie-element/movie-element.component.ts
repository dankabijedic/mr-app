import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.scss'],
})
export class MovieElementComponent implements OnInit {
  @Input() movie: Movie = {id: 'q3', name: 'Neki', rating: 8, comment: 'Neki kom', imageUrl: ''};

  constructor() { }

  ngOnInit() {}

}
