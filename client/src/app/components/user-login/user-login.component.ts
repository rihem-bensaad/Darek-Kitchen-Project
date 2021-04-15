import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  changeData(event: Event) {
    const { target } = event;
    if (target) {
      this.email = (target as HTMLButtonElement).value;
    }
    if (target) {
      this.password = (target as HTMLButtonElement).value;
    }
  }

  postFrom() {
    this.userService.postFrom({
      email: this.email, password: this.password
    })
      .subscribe(() => console.log('your data is posted'))
    this.router.navigate(["singin"])
  }

}
