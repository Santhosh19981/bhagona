import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.page.html',
  styleUrls: ['./orderconfirm.page.scss'],
  standalone:false,
})
export class OrderconfirmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }
}
