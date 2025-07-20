import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
    standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ServiceDetailsPage implements OnInit {
  @Input() from: string | undefined;
 private platform = inject(Platform);
 isMobile:boolean = false;
 
  constructor(private router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
     this.isMobile = this.platform.is('cordova') || this.platform.is('capacitor') || this.platform.is('mobile') || this.isMobileBrowser();
  }
  isMobileBrowser(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /android|iphone|ipad|mobile/i.test(userAgent);
  }

  //   gotomenu() {
  //   if (this.from === 'websitehome') {
  //     const returnData = {
  //       message: 'User closed the modal',
  //       timestamp: new Date()
  //     };
  //     this.modalCtrl.dismiss(returnData, 'closed');
  //   } else {
  //     this.router.navigate(['/menu']);
  //   }
  // }


 gottoHome() {
    if (this.from == "websitehome")
      this.modalCtrl.dismiss();
    else
      this.router.navigate(['/home']);
  }


  continue(){
    if(this.isMobile)
      this.router.navigate(['/checkout']);
    else{
      this.modalCtrl.dismiss();
      this.router.navigate(['/webcheckout']);
    }
      
  }
}

