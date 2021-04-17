import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ChefService } from '../../services/chef.service';

@Component({
  selector: 'app-chef-login',
  templateUrl: './chef-login.component.html',
  styleUrls: ['./chef-login.component.css']
})
export class ChefLoginComponent implements OnInit {
 loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private chefService: ChefService, private router: Router) { }

  ngOnInit(): void {
  }
    loginFrom() {
    this.chefService.login(this.loginForm.value)
      .subscribe((result) => {
        localStorage.setItem('data', JSON.stringify(result))
        console.log(result)
        this.router.navigate([''])
      })
  }

}
