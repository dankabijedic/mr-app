import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { FinishedModalComponent } from './finished-modal/finished-modal.component';
import { Finished } from './finished.model';
import { FinishedService } from './finished.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.page.html',
  styleUrls: ['./finished.page.scss'],
})
export class FinishedPage {

  finished: Finished[];

  constructor(private menuCtrl: MenuController, private finishedService: FinishedService, private modalCtrl: ModalController) {
    console.log('constructor');
    this.finished = this.finishedService.finished
  }

  openMenu() {
    this.menuCtrl.open();
  }

  openModal() {
    this.modalCtrl.create({
      component: FinishedModalComponent,
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
