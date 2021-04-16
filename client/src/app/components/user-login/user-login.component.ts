import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  postFrom() {
    this.userService.login(this.loginForm.value)
      .subscribe((result) => {
        localStorage.setItem('data', JSON.stringify(result))
        console.log(result)
        this.router.navigate([''])
      })
  }

}
