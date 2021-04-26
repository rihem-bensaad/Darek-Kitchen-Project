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
    return this.http.post('http://localhost:3000/admin/createchef', data)
  }
  loginChef(data:any) {
    return this.http.post('http://localhost:3000/chef/login', data)
  }
  getChef() {
    return this.http.get("http://localhost:3000/admin/getchef")
  }
  deleteChef(ID :Number) {
    return this.http.delete('http://localhost:3000/admin/removechef/' + ID )
  }
}
