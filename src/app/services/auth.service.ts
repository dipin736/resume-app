import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

  signup(username: string, password: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (!localStorage.getItem(username)) {
        localStorage.setItem(username, password); 
        return true;
      }
    }
    return false; 
  }


  login(username: string, password: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const storedPassword = localStorage.getItem(username); 
      if (storedPassword && storedPassword === password) {
        sessionStorage.setItem('isLoggedIn', 'true'); 
        sessionStorage.setItem('currentUser', username); 
        return true;
      }
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('isLoggedIn'); 
      sessionStorage.removeItem('currentUser'); 
    }
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
  }
}
