import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  users: any = [];
  constructor(private userService: UserService , private adminService: AdminService) { }

  ngOnInit(): void {
    this.getusers()
  }
  getusers() {
    this.userService.getUser().subscribe((data) => {
      this.users = data
    })
  }
   deleteUser(brand: any) {
    this.adminService.DeleteUser(brand.ID_user).subscribe(() => {
      this.getusers()
    })
    console.log("deleted");
  }
}

