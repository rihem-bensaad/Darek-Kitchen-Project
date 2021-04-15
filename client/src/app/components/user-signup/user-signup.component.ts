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

  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  Password: string = '';
  PhoneNumber: string = '';
  Location: string = '';


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  changeData(event: Event) {
    const { target } = event;
    if (target) {
      this.FirstName = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.LastName = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.Email = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.Password = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.PhoneNumber = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.Location = (target as HTMLButtonElement).value;
    }
  }


  postFrom() {
    this.userService.postFrom({
      FirstName: this.FirstName, LastName: this.LastName, Email: this.Email, Password: this.Password, PhoneNumber: this.PhoneNumber,
      Location: this.Location
    })
      .subscribe(() => console.log('your data is posted'))
    this.router.navigate(["singin"])
  }
}
