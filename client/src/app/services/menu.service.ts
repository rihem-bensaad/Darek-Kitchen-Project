import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: any = []

  constructor(private http: HttpClient) {
  }
  getmenu() {
    return this.http.get("http://localhost:3000/menu/get")
  }
  postmenu(menuObject: any) {
    return this.http.post("http://localhost:3000/menu/post", menuObject)
  }
}
