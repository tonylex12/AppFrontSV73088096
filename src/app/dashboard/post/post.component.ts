import { Component, OnInit } from '@angular/core';
import { PostResponse } from '../../models/post-response.models';
import { MaterialModule } from '../../angular-material/material/material.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  posts: PostResponse[] = [];
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listarPosts().subscribe({
      next: (response) => {
        console.log(response);
        this.posts = response;
      },
    });
  }

  listarPosts(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.apiUrl);
  }
}
