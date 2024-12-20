import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { UserResponse } from '../../models/user-response.models';
import { UserViewmodelService } from '../../viewmodels/user-viewmodel.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: UserResponse[] = [];

  constructor(private userViewModel: UserViewmodelService) {}

  ngOnInit(): void {
    this.userViewModel.listarUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
