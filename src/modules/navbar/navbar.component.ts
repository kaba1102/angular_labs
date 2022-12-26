import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined;

  constructor(
    private authService: AuthService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }


  onMain():void {
    this.routes.navigate(['/main']);
  }

  onInfo():void {
    this.routes.navigate(['/info']);
  }

  onLogout():void {
    this.authService.logout();
  }
}
