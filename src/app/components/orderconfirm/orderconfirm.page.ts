import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.page.html',
  styleUrls: ['./orderconfirm.page.scss'],
  standalone:false,
})
export class OrderconfirmPage implements OnInit {
 private platform = inject(Platform);
 isMobile:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
     this.isMobile = this.platform.is('cordova') || this.platform.is('capacitor') || this.platform.is('mobile') || this.isMobileBrowser();
  }
  isMobileBrowser(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /android|iphone|ipad|mobile/i.test(userAgent);
  }
  gotoHome(){
    if(this.isMobile)
    this.router.navigate(['/home']);
    else
    this.router.navigate(['/websitehome']);    
  }

  gotoOrders(){
      this.router.navigate(['/customerorders']);
  }
}
