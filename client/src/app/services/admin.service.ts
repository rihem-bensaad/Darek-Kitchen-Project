import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  userData : any = []
  constructor(private http: HttpClient) {
  }

  login(data:any) {
    return this.http.post('http://localhost:3000/admin/login', data)
  }

  DeleteBrand(ID_brands:Number) {
    return this.http.delete('http://localhost:3000/admin/removebrand/'+ ID_brands)
  }
  UpdateBrand(ID_brands:Number, brandObj:any) {
    return this.http.put('http://localhost:3000/admin/updatebrand/' + ID_brands, brandObj)
  }
  DeleteUser(ID_user:Number) {
    return this.http.delete('http://localhost:3000/user/'+ ID_user)
  }
}
