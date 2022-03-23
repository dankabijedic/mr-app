import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { InProgressModalComponent } from './in-progress-modal/in-progress-modal.component';
import { InProgress } from './in-progress.model';
import { InProgressService } from './in-progress.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage {

  inprogresses: InProgress[];

  constructor(private menuCtrl: MenuController, private inprogressService: InProgressService, private modalCtrl: ModalController) {
    console.log('constructor');
    this.inprogresses = this.inprogressService.inprogress
  }

  openMenu() {
    this.menuCtrl.open();
  }

  openModal() {
    this.modalCtrl.create({
      component: InProgressModalComponent,
      componentProps: { title: 'Add a TV-show' }
    }).then((modal: HTMLIonModalElement) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
      }
    })
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngViewWillEnter() {
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
    console.log('ngOnDestroy');
  }
}
