import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ChefService } from '../../services/chef.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chef-signup',
  templateUrl: './chef-signup.component.html',
  styleUrls: ['./chef-signup.component.css']
})
export class ChefSignupComponent implements OnInit {
   signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl(''),
    location: new FormControl(''),
    imageCardId: new FormControl('')
  });

  constructor(private chefService: ChefService, private router: Router) { }

  ngOnInit(): void {
  }
   chefFrom() {
 console.log(this.signupForm.value)
    this.chefService.postFrom(this.signupForm.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      })
  }

}
