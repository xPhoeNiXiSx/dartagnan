import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OverlayPanelModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

  public play(): void {
    this.router.navigate(['/game/play']);
  }

  public logout(): void {
    this.authService.logout();
  }

}
