import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome to your dashboard',
        icon: 'success',
        timer: 800, 
        showConfirmButton: false,
      }).then(() => {
        this.router.navigate(['/resume']); 
      });
    } else {
      Swal.fire({
        title: 'Login Failed!',
        text: 'Invalid username or password',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  }
}
