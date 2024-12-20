import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(usuario: HTMLInputElement, password: HTMLInputElement) {
    this.authService.login(usuario.value, password.value);
    this.router.navigateByUrl('/dashboard');
  }
}
