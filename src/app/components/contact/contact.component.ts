import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check for empty fields
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return;
    }


    if (!emailPattern.test(this.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'I will get back to you soon.',
    });


    this.name = '';
    this.email = '';
    this.message = '';
  }
}
