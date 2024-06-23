import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './auth.guard';
import { SecuredLayoutComponent } from './layout/secured-layout/secured-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecuredLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
