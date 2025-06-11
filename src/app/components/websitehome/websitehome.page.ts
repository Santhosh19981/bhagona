import { Component, OnInit } from '@angular/core';
import { EventDetailsPage } from '../event-details/event-details.page';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-websitehome',
  templateUrl: './websitehome.page.html',
  styleUrls: ['./websitehome.page.scss'],
  standalone:true,
  imports: [CommonModule,IonicModule, EventDetailsPage]
})
export class WebsitehomePage implements OnInit {
  isEvents:boolean = true;
  isMenu:boolean = false;
  ischeffs:boolean =false;
  constructor(private modalCtrl: ModalController,private router: Router) { }

  ngOnInit() {
  }
   async openEventDetailsModal() {
    const modal = await this.modalCtrl.create({
      component: EventDetailsPage,
      componentProps: {
        from: 'websitehome'
      }
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (role === 'closed') {
      this.onModalClosed(data);
    }
  }

  onModalClosed(returnedData: any) {
    if (returnedData) {
      this.isEvents = false;
      this.isMenu = true;
    }
    console.log('Modal closed with data:', returnedData);
  }

  gotocheff(){
      this.isMenu = false;
      this.ischeffs = true;
  }
  gotoCheckout(){
      this.router.navigate(['/webcheckout']);
  }

  gotoOrders(){
      this.router.navigate(['/customerorders']);
  }

}
