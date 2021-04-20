import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service'

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
  selectedFile = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
  }

  constructor( private brandService: BrandService) { }

  ngOnInit(): void {
  }

  addBrand() {
    this.brandService.postbrand(this.brandForm.value).subscribe((data:any)=> {
      console.log(data)
    })
  }

}
