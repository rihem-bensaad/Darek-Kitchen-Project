import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { AdminService } from '../../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  users: any = [];
  brand: any = [];
  
  constructor(private userService: UserService , private adminService: AdminService) { }
  filterTerm!: string;
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
    console.log("deleted")
  }
  confirmBox(menu : any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      width:'350px',
      iconColor: '#DEB28F',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor:'#DEB28F',
      cancelButtonText: 'No, keep it'
    }).then((result) => {      
      if (result.value) {
        this.adminService.DeleteUser(brand.ID_user)
        .subscribe() 
        Swal.fire({
          title:'Deleted!',
          text:'Your Plate has been deleted.',
          icon:'success',
          iconColor: '#DEB28F',
          confirmButtonColor:'#DEB28F',
          width:'350px',
        })
        this.getusers()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title:'Cancelled',
          text:'Your Plate is safe :)',
          icon:'error',
          width:'350px',
          iconColor: '#DEB28F',
          confirmButtonColor:'#DEB28F',
        })
      }
    })
  }
}

