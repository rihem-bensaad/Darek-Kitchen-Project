import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
  providers: [BrandService]
})
export class AddBrandComponent implements OnInit {
  title = 'angular-cloudinary';
  files: File[] = [];

  brandForm = new FormGroup({
    brandName: new FormControl(''),
    category: new FormControl(''),
    logo: new FormControl('')
  });
  selectedFile = null;

  onSelect(event: any) {
    this.selectedFile = event.target.files[0]
  }
  onUpload() {
    if (!this.files[0]) {
      alert('Please select a file')
    }
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'angular_cloudinary');
    data.append('cloud_name', 'codexmaker');

    // this.brandService.uploadImage(data).subscribe(result => {
    //   if (res) {
    //     console.log(res);

    //   }

    // })
  }

  constructor( private brandService: BrandService, http: HttpClient) { }

  ngOnInit(): void {
  }

  addBrand() {
    this.brandService.postbrand(this.brandForm.value).subscribe((data:any)=> {
      console.log(data)
    })
  }


}
