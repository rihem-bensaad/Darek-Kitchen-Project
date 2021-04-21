import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  productData: any = []

  constructor(private http: HttpClient) {
  }
  getbrand() {
    return this.http.get("http://localhost:3000/brand/get")
  }
  postbrand(brandObject: any) {
    return this.http.post("http://localhost:3000/brand/add", brandObject)
  }
  uploadImage(value: Observable<any>) {
    let data = value;
    return this.http.post('https://api.cloudinary.com/v1_1/codexmaker/image/upload', data)
  }
  deleteBrand(data: any) {
    return this.http.delete('http://localhost:3000/brand/removebrand/:id', data)
  }
}
