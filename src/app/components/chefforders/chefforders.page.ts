import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chefforders',
  templateUrl: './chefforders.page.html',
  styleUrls: ['./chefforders.page.scss'],
  standalone: false,
})
export class CheffordersPage implements OnInit {
  isDetailsPage:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

   logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  view(){
    this.isDetailsPage = true;
  }
}
