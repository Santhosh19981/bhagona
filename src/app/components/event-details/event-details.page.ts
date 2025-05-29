import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
  standalone:false
})
export class EventDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotomenu(){
     this.router.navigate(['/menu']);
  }
}
