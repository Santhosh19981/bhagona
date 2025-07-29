import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
   standalone:false
})
export class VendorsPage implements OnInit {

 constructor(private router: Router) { }

  ngOnInit() {
  }
 gotoCheckoput(){
     this.router.navigate(['/checkout']);
  }
}
