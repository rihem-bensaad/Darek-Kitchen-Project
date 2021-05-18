import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import jwt_decode from "jwt-decode";
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  fieldTextType: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService:AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

    initRegForm() {
      this.loginForm = this.fb.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required]
      });
    }
    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }
  DecodeToken(token: string): any {
    return jwt_decode(token);
  }
  postFrom() {
    this.authService.login(this.loginForm.value)

      .subscribe((result : any) => {
        // console.log(result,"aaaaa")
        localStorage.setItem('data', JSON.stringify(result))
        localStorage.setItem('id', JSON.stringify(result.userId))
        if(this.DecodeToken(result['token'])['role']==="user"){
          this.router.navigate(['/welcome'])
        }
        if(this.DecodeToken(result['token'])['role']==="chef"){
          this.router.navigate(['/addplate'])
        }
        if(this.DecodeToken(result['token'])['role']==="admin"){
          this.router.navigate(['/dashboard'])
        }


        }

    )
  }
    }

