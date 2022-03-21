import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Finished } from './finished.model';
import { FinishedService } from './finished.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.page.html',
  styleUrls: ['./finished.page.scss'],
})
export class FinishedPage {

  finished: Finished[];

  constructor(private menuCtrl: MenuController, private finishedService: FinishedService) {
    console.log('constructor');
    this.finished = this.finishedService.finished
  }

  openMenu() {
    this.menuCtrl.open();
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
