import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service'


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  adminForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  adminFrom() {
    this.adminService.postFrom(this.adminForm.value)
      .subscribe(() => {
        this.router.navigate(['/adminLogin']);
      })
  }
}
