import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  addContact(data:any):any{
    this.http.post('localhost:3000/contact',data)
  }
}
