import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseUrl: string = `${environment.origin}/auth`;

    constructor(
        private http: HttpClient,
        private routes: Router
    ) { }

    login(email: string, password: string) {
        return this.http
        .post<{ token: string }>(`${environment.apiUrl}/auth/login`, { email, password })
        .pipe(
            map((res) => {
                if (res.token) {
                    localStorage.setItem('auth_token', res.token);
                }
                return null;
            })
        );
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.routes.navigate(['auth']);
    }
}
