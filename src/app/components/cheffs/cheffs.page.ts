import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheffs',
  templateUrl: './cheffs.page.html',
  styleUrls: ['./cheffs.page.scss'],
  standalone:false
})
export class CheffsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 gotoCheckoput(){
     this.router.navigate(['/checkout']);
  }
}
