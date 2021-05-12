import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  curentUserService: any;

  constructor(private http: HttpClient) {}
  login(data:any) {
    return this.http.post("http://localhost:3000/login", data)
  }
  isloggedIn() {
    this.curentUserService = localStorage.getItem('data')
    console.log("cuuuuuuuuuuuuuuuuuuuuuuu",this.curentUserService);
    return !!localStorage.getItem('data');

  }
}
