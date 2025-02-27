import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  title = 'resume-app';

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload(); 
        });
      }
    });
  }
}
