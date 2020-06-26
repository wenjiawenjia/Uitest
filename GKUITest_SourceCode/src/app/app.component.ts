import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'gktest';
  dashboardLabel = 'Welcome to Green Koncepts';

  cards = ['Hierrarchy', 'Customer', 'Orders', 'Schedules', 'Messages', 'Emails'];
  constructor(
    private route: Router
  ) {

  }
  OnInit() {

  }
  onClick(name) {
    switch (name) {
      case 'Hierrarchy':

        this.route.navigate(['hierrarchy']);
        break;
      case 'Customer':

        this.route.navigate(['customer']);
        break;
    }

  }
}
