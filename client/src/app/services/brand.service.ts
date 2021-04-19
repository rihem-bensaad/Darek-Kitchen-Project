import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData: any = []

  constructor(private http: HttpClient) {
  }
  getproduct() {
    return this.http.get("http://localhost:3000/brand")

  }
}
