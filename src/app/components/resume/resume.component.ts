import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DogService } from '../../services/dog.service';
import { DogPopupComponent } from '../dog-popup/dog-popup.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule,RouterLink],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  resumeSections = [
    { 
      title: 'Education', 
      content: [
        'B-Tech Mechanical Engineering',
      ] 
    },
    { 
      title: 'Work Experience', 
      experience: [
        {
          role: 'Junior Software Developer (ReactJS)',
          company: 'Freelancer',
          duration: 'Nov 2024 – Present',
          details: [
            'Participating in ReactJS development and company-specific projects.',
            'Contributing to backend team discussions and API design.',
            'Collaborating with clients for project requirements and updates.',
            'Conducted website testing and debugging.'
          ]
        },
        {
          role: 'Angular Developer',
          duration: 'Mar 2024 – Sep 2024',
          details: [
            'Worked on BUILDEXE - Construction Management Software.',
            'Developed user-facing features using Angular, HTML, CSS, and JavaScript.',
            'Integrated frontend components with backend logic.',
            'Conducted website testing and debugging.'
          ]
        },
      ]
    },
    { 
      title: 'Skills', 
      skills: [
        'Back-End Development: Python, Django (Django REST Framework), Flask, FastAPI',
        'Front-End Development: HTML, CSS, JavaScript, TypeScript, Angular, React, jQuery, Bootstrap',
        'Database Management: MySQL, MongoDB',
        'Version Control and Collaboration: Git, GitHub, Jira',
        'Cloud Computing: AWS (EC2, RDS)'
      ] 
    },
    { 
      title: 'Projects', 
      projects: [
        {
          name: 'Game Store (Full-Stack Web Application)',
          description: 'Developed a full-stack web application for browsing, purchasing, and reviewing games.',
          tech: 'React, Django REST framework, Chakra UI, JWT, MySQL, Git',
          link: 'https://gamestore-ce62.onrender.com'
        },
        {
          name: 'Online Bookstore Management',
          description: 'Web-based bookstore application with book management, authentication, cart, and payment integration.',
          tech: 'Django, HTML, CSS, JavaScript, Bootstrap, Razorpay',
          link: 'https://dipinbookstore.pythonanywhere.com'
        },
        {
          name: 'Blog Website (Full-Stack Web Application)',
          description: 'Developed a blog platform using React and Django REST Framework with MySQL storage.',
          tech: 'React.js, Bootstrap, Django REST Framework, MySQL, Docker',
          link: 'https://github.com/dipin736/Blog-App.git'
        },
      ]
    }
  ];

  constructor(private dogService: DogService, private dialog: MatDialog) {}

  fetchDog() {
    this.dogService.fetchDogImage().subscribe((response: any) => {
      this.dialog.open(DogPopupComponent, {
        data: { imageUrl: response.message },
      });
    });
  }
}