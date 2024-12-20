import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response.models';

@Injectable({
  providedIn: 'root'
})
export class UserViewmodelService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  listarUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.apiUrl);
  }
}
