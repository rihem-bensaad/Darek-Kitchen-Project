import { Component, OnInit } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {
  chefs: any = [];

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl(''),
    location: new FormControl(''),
    imageCardId: new FormControl('')
  });

  constructor(private ChefService: ChefService) { }

  ngOnInit(): void {
    this.getChefs()
    this.addChef()
  }

    deleteChef(chef:any){
      this.ChefService.deleteChef(chef.ID)
      .subscribe()
      location.reload()
      }


  addChef() {
    this.ChefService.postFrom(this.signupForm.value)
      .subscribe(() => {
        location.reload()
      })
  }


  getChefs() {
    this.ChefService.getChef().subscribe((data) => {
      this.chefs = data
    })
  }
}
