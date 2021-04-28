import { Component, OnInit } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';



@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {
  chefs: any = [];

  signupForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    imageCardId: new FormControl('',[Validators.required])
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
