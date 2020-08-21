import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public validUser: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  public login(event) {
    const userData = {
      username: event.username,
      password: event.password,
    };
    this.validUser = this.authService.verifyUser(userData);
    if (this.validUser) {
      this.router.navigateByUrl('/books');
    }
  }
}
