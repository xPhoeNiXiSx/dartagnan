import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {
    const savedStatus = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = savedStatus === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
