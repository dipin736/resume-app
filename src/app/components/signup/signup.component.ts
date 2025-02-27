import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  imports: [FormsModule, MatCardModule, MatInputModule, MatButtonModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (!this.username || !this.password) {
      Swal.fire({
        title: 'Error!',
        text: 'All fields are required!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (this.username.length < 3) {
      Swal.fire({
        title: 'Error!',
        text: 'Username must be at least 3 characters long.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (this.password.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must be at least 6 characters long.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (this.authService.signup(this.username, this.password)) {
      Swal.fire({
        title: 'Signup Successful!',
        text: 'You can now log in.',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false,
      }).then(() => {
        this.router.navigate(['/login']); // Redirect to login page
      });
    } else {
      Swal.fire({
        title: 'Signup Failed!',
        text: 'Username already exists. Choose another one.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  }
}