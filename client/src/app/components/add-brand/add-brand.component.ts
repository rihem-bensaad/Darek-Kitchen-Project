import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
   brandForm = new FormGroup({
    brandName: new FormControl(''),
    category: new FormControl(''),
    logo: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  addBrand() {
    
  }

}
