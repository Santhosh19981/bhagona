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
  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  gotomenu() {
    if (this.from == "websitehome") {
      const returnData = {
        message: 'User closed the modal',
        timestamp: new Date()
      };

      this.modalCtrl.dismiss(returnData, 'closed');
    }
    else
      this.router.navigate(['/menu']);
  }

  gottoHome() {
    if (this.from == "websitehome")
      this.modalCtrl.dismiss();
    else
      this.router.navigate(['/home']);
  }
}
