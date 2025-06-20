import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
  standalone: false,
})
export class ReviewPage implements OnInit {

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
    this.router.navigate(['/websitehome']);
  }
}
