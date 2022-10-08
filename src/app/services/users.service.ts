import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL: string = '';

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    console.log(user);
    
    return this.http.post(this.baseURL, user);
  }
}
