import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  addContact(data:any): Observable <any>{
  return this.http.post<any>('http://localhost:3000/email',data)
  }
}
