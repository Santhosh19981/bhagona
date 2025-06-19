import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router,) {}
  gotoevent(){
    this.router.navigate(['/event-details']);
  }
  gotoservice(){
    this.router.navigate(['/service-details']);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  chefforders(){
    this.router.navigate(['/chefforders']);
  }
}
