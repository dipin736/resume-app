import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { authGuard } from './services/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resume', component: ResumeComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
];