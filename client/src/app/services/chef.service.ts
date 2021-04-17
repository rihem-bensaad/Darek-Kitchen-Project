import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  userData : any = []
  constructor(private http: HttpClient) {
  }
  postFrom(data: any) {
    return this.http.post('http://localhost:3000/chef/signup', data)
  }
  login(data:any) {
    return this.http.post('http://localhost:3000/chef/login', data)
  }
}
