import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-finished-modal',
  templateUrl: './finished-modal.component.html',
  styleUrls: ['./finished-modal.component.scss'],
})
export class FinishedModalComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  @Input() title: string;

  constructor(private modalCtrl: ModalController) { }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddFinished() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss({
      finishedData:
      {
        name: this.form.value['name'],
        rating: this.form.value['rating'],
        comment: this.form.value['comment'],
      }
    }, 'confirm');
  }

  ngOnInit() {}

}
