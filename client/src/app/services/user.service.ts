import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData : any = []
  constructor(private http: HttpClient) {
  }
  postFrom(data: any) {
    return this.http.post('http://localhost:3000/user/signup', data)
  }
  login(data:any) {
    return this.http.post('http://localhost:3000/user/login', data)
  }
  getUser() {
    return this.http.get("http://localhost:3000/user/getall")
  }
}
