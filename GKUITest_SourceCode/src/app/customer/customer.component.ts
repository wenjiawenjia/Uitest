import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerText = 'Add Customer Details';
  ageFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(100)
  ]);
  addrFormControl = new FormControl('', [
    Validators.required,
  ]);
  custFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(
    private route: Router,
    private location: Location,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  onSave(name, age, address) {

    this.apiService.createCustomer(name, age, address).subscribe(resp => {
      console.log(resp);
      window.alert("Successful created customer")
    });

  }

  onBackClick() {
    this.location.back();

  }
}
