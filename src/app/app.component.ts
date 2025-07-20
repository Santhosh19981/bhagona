import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  private platform = inject(Platform);
  private router = inject(Router);

  private hasInitialized = false; // Prevent double init

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    if (this.hasInitialized) return;
    this.hasInitialized = true;

    const isMobile =
      this.platform.is('cordova') ||
      this.platform.is('capacitor') ||
      this.platform.is('mobile') ||
      this.isMobileBrowser();

    const isLoggedIn = !!localStorage.getItem('user');

    if (isMobile) {
      this.router.navigate([isLoggedIn ? '/home' : '/login']);
    } else {
      this.router.navigate(['/websitehome']);
    }
  }

  isMobileBrowser(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /android|iphone|ipad|mobile/i.test(userAgent);
  }
}