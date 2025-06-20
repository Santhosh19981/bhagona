import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

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
  orders(){
     this.router.navigate(['/customerorders']);
    
  }
   ngOnInit() { 
      const userType =  localStorage.getItem('userType')
      if(userType && userType == 'cheff')
        this.chefforders();
    }

}
