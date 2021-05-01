import { Component, OnInit } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {
  chefs: any = [];
  selectedFile = null;

  signupForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    imageCardId: new FormControl('',[Validators.required])
  });

  constructor(private ChefService: ChefService, private http : HttpClient) { }
  filterTerm!: string;
  
  ngOnInit(): void {
    this.getChefs()
    this.addChef()
  }
    onFileSelected(event : any){
      console.log(event);
      this.selectedFile = event.target.files[0] 
    }

    onUpload(){
      
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
