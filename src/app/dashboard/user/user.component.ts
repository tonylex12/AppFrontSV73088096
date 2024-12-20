import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { UserResponse } from '../../models/user-response.models';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: UserResponse[] = [];

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listarUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
    });
  }

  listarUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.apiUrl);
  }
}
