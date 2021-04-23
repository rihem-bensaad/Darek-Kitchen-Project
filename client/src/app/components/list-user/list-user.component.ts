import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users : any = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
   getusers() {
    this.userService.getUser().subscribe((data) => {
      this.users = data
    })
  }

}
