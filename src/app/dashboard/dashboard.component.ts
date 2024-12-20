import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService
  ) {}

  goPosts() {
    this.router.navigate(['posts'], { relativeTo: this.route });
  }

  goUsers() {
    this.router.navigate(['users'], { relativeTo: this.route });
  }

  logout() {
    this.authservice.logout();
    this.router.navigateByUrl('/login');
  }
}
