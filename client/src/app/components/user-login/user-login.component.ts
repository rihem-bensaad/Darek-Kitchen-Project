import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import jwt_decode from "jwt-decode";
import { AuthenticationService } from '../../services/authentication.service'


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

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  DecodeToken(token: string): any {
    return jwt_decode(token);
    }

  postFrom() {
    this.authService.login(this.loginForm.value)
      .subscribe((result : any) => {
       this.DecodeToken(result['token'])['role']
        localStorage.setItem('data', JSON.stringify(result))
        console.log(result)
        this.router.navigate(['/'])
      })
  }

}
