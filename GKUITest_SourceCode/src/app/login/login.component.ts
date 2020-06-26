import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { userService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private url = environment.apiUrl;
  usernameValue = '';
  passwordValue = '';
  user = {
    firstName: '',
    lastName: '',
    userName: 'username',
  }
  sessionID = '';
  dashboardLabel = 'Welcome to Green Koncepts';

  cards = ['Hierarchy', 'Customer', 'Orders', 'Schedules', 'Messages', 'Emails'];
  loggedIn = false;

  constructor(
    private route: Router,
    private apiService: ApiService,
    private userService: userService

  ) { }

  ngOnInit() {
  }

  onLogin(username, password) {
    console.log(username, password);

    //call api
    this.apiService.login(username, password).subscribe(resp => {

      this.user.firstName = resp.firstName;
      this.user.lastName = resp.lastName;
      this.user.userName = resp.userName;
      this.sessionID = resp.key;
      this.userService.setSessionKey(resp.key);
    });

    this.loggedIn = true;
    console.log(this.loggedIn);

    // this.route.navigate(['../'], {});

  }

  onLogout() {
    this.apiService.logout(this.sessionID).subscribe(resp => {
      this.loggedIn = false;
      console.log(resp);

    })

  }



  onClick(name) {
    switch (name) {
      case 'Hierarchy':

        this.route.navigate(['hierarchy']);
        break;
      case 'Customer':

        this.route.navigate(['customer']);
        break;
    }

  }

}
