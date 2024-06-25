import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-secured-layout',
  templateUrl: './secured-layout.component.html',
  styleUrls: ['./secured-layout.component.scss']
})
export class SecuredLayoutComponent {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

}
