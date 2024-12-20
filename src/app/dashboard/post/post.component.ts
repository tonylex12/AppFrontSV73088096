import { Component } from '@angular/core';
import { PostResponse } from '../../models/post-response.models';
import { MaterialModule } from '../../angular-material/material/material.module';
import { PostViewmodelService } from '../../viewmodels/post-viewmodel.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent  {
  posts: PostResponse[] = [];

  constructor(private postViewModel: PostViewmodelService) {}

  ngOnInit(): void {
    this.postViewModel.listarPosts().subscribe({
      next: (response) => {
        console.log(response);
        this.posts = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
