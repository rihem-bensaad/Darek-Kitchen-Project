import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
    adminForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
    postFrom() {
    this.adminService.adminFrom(this.adminForm.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      })
  }

}
