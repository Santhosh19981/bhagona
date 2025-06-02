import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone:false
})
export class CheckoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  gotoOrdder(){
     this.router.navigate(['/orderconfirm']);
  }
  

}
