import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl([''],[Validators.required]),
    lastName: new FormControl([''],[Validators.required]),
    email: new FormControl([''],[Validators.required, Validators.email]),
    password: new FormControl([''],[Validators.required, Validators.minLength(8)]),
    phoneNumber: new FormControl([''],[Validators.required]),
    location: new FormControl([''],[Validators.required]),
  });

  


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


shouldShowFirstNameRequiredError() {

    const firstName = this.signupForm.controls.firstName;

    return firstName.touched && firstName.hasError('required');

}
shouldShowLastNameRequiredError() {

  const lastName = this.signupForm.controls.lastName;

  return lastName.touched && lastName.hasError('required');

}
shouldShowEmailRequiredError() {
  const email = this.signupForm.controls.email;
  return email.touched && email.hasError('required');
}

shouldShowPasswordRequiredError() {

  const password = this.signupForm.controls.password;

  return password.touched && password.hasError('required');

}
shouldShowPhoneNumberRequiredError() {

  const phoneNumber = this.signupForm.controls.phoneNumber;

  return phoneNumber.touched && phoneNumber.hasError('required');

}
shouldShowLocationRequiredError() {

  const location = this.signupForm.controls.location;

  return location.touched && location.hasError('required');

}


  postFrom() {
    this.userService.postFrom(this.signupForm.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      })
  }
}