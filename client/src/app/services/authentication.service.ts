import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
   login(data:any) {
    return this.http.post("http://localhost:3000/login", data)
  }
//   public isAuthenticated(): boolean {
//     const token : any = localStorage.getItem('token');
//     return !this.jwtHelper.isTokenExpired(token);
  
// }
  isloggedIn() {
    return !!localStorage.getItem('data')
  }
}
