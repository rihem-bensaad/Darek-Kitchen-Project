import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  location: string = '';


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  changeData(event: Event) {
    const { target } = event;
    if (target) {
      this.firstName = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.lastName = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.email = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.password = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.phoneNumber = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.location = (target as HTMLButtonElement).value;
    }
  }


  postFrom() {
    this.userService.postFrom({
      firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, phoneNumber: this.phoneNumber, location: this.location
    }).subscribe(() => console.log('your data is posted'))
    this.router.navigate(["singin"])
  }
}
