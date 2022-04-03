import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movies-modal',
  templateUrl: './movies-modal.component.html',
  styleUrls: ['./movies-modal.component.scss'],
})
export class MoviesModalComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  @Input() title: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddMovie() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss(
     {
      movieData:
      {
        name: this.form.value.name,
        rating: this.form.value.rating,
         comment: this.form.value.comment,
         imageUrl: this.form.value.comment
      }
    },'confirm');
  }

}
