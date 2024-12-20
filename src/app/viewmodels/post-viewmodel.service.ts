import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostResponse } from '../models/post-response.models';

@Injectable({
  providedIn: 'root'
})
export class PostViewmodelService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  listarPosts(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.apiUrl);
  }
}
