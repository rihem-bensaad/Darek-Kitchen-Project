import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: any = []
  menubrand: string = "Traditional Food";

  constructor(private http: HttpClient) {
  }
  getmenu():Observable<any>{
    return this.http.get("http://localhost:3000/menu/get")
  }
  getmenuById(ID_menu:Number):Observable<any>{
    return this.http.get("http://localhost:3000/menu/get/" + ID_menu).pipe(
      map((result: any = []) => {
        let cartItems: any = [];

        for (let item of result) {
          let productExists = false;

          for (let i in cartItems) {
            if (cartItems[i].productId === item.menu.ID_menu) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(item.ID_menu, item.menu)
          }
        }
        return cartItems;
      })
    )
  }
  getMenuByBrandId(ID_brands:Number){
    return this.http.get("http://localhost:3000/menu/get/" + ID_brands)
  }
  postmenu(menuObject: any) {
    return this.http.post("http://localhost:3000/menu/post", menuObject)
  }
  deletemenu(ID_menu:Number) {
    return this.http.delete("http://localhost:3000/menu/delete/"+ ID_menu)
  }
}
