import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
