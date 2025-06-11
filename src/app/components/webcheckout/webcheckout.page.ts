import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webcheckout',
  templateUrl: './webcheckout.page.html',
  styleUrls: ['./webcheckout.page.scss'],
  standalone: false,
})
export class WebcheckoutPage implements OnInit {

 constructor(private router: Router) { }

  ngOnInit() {
  }
  
  gotoOrdder(){
     this.router.navigate(['/orderconfirm']);
  }
  gotoOrders(){
      this.router.navigate(['/orderconfirm']);
  }
}
