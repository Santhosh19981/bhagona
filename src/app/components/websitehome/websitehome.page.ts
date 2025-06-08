import { Component, OnInit } from '@angular/core';
import { EventDetailsPage } from '../event-details/event-details.page';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-websitehome',
  templateUrl: './websitehome.page.html',
  styleUrls: ['./websitehome.page.scss'],
  standalone:true,
  imports: [CommonModule,IonicModule, EventDetailsPage]
})
export class WebsitehomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

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
  }
  onModalClosed(returnedData: any) {
    console.log('Modal closed with data:', returnedData);
    // Perform whatever action you want here
  }
  
}
