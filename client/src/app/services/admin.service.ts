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
   DeleteBrand(ID_brands: string) {
    return this.http.delete('http://localhost:3000/admin/removebrand/'+ ID_brands)
  }
}
