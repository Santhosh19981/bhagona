import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class EventDetailsPage implements OnInit {
@Input() from: string | undefined;

  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}

  gotomenu() {
    if (this.from === 'websitehome') {
      console.log('Returning from modal with data and role');
      const returnData = {
        message: 'User chose to go to menu',
        timestamp: new Date()
      };
      this.modalCtrl.dismiss(returnData, 'closed');
    } else {
      this.router.navigate(['/menu']);
    }
  }

  gottoHome() {
      this.router.navigate(['/home']);
  }
}