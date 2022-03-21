import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InProgress } from './in-progress.model';
import { InProgressService } from './in-progress.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.page.html',
  styleUrls: ['./in-progress.page.scss'],
})
export class InProgressPage {

  inprogresses: InProgress[];

  constructor(private menuCtrl: MenuController, private inprogressService: InProgressService) {
    console.log('constructor');
    this.inprogresses = this.inprogressService.inprogress
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
