import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  productData: any = []
  brandCategory: string = "Traditional Food";

  constructor(private http: HttpClient) {
  }
  getbrand():Observable <any>{
    console.log("brandCategory",this.brandCategory);
    return this.http.get(`http://localhost:3000/brand/get`)
  }
  postbrand(brandObject: any) {
    return this.http.post("http://localhost:3000/brand/add", brandObject)
  }

}
