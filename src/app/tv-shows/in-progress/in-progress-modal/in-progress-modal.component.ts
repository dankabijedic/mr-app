import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-in-progress-modal',
  templateUrl: './in-progress-modal.component.html',
  styleUrls: ['./in-progress-modal.component.scss'],
})
export class InProgressModalComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  @Input() title: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddInProgress() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss({
      inprogressData:
      {
        name: this.form.value['name'],
      }
    }, 'confirm');
  }

}
