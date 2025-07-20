import { Component, OnInit } from '@angular/core';
import { EventDetailsPage } from '../event-details/event-details.page';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceDetailsPage } from '../service-details/service-details.page';

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

    console.log('Waiting for modal to dismiss...');
    const { data, role } = await modal.onDidDismiss();
    console.log('Modal dismissed with:', data, role);

    if (role === 'closed') {
      this.onModalClosed(data);
    }
  }

    async openServiceDetailsModal() {
    const modal = await this.modalCtrl.create({
      component: ServiceDetailsPage,
      componentProps: {
        from: 'websitehome'
      }
    });

    await modal.present();
  }

  onModalClosed(returnedData: any) {
    console.log('Modal closed with data:', returnedData);
    if (returnedData) {
      this.isEvents = false;
      this.isMenu = true;
    }
  }

  gotocheff() {
    this.isMenu = false;
    this.ischeffs = true;
  }

  gotoCheckout() {
    this.router.navigate(['/webcheckout']);
  }

  gotoOrders() {
    this.router.navigate(['/customerorders']);
  }
}