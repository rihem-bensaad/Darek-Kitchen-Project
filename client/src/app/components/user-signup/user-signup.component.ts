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
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl(''),
    location: new FormControl(''),
  });




  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }



  postFrom() {
 console.log(this.signupForm.value)
    this.userService.postFrom(this.signupForm.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      })
  }
}
