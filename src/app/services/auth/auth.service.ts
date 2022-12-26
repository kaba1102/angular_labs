import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'
import { BehaviorSubject, map } from 'rxjs';


interface ITokenPayloadRole {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    UserRole: {
        id: number,
        userId: number,
        roleId: number,
        createdAt: string,
        updatedAt: string
    }
}

interface ITokenPayload {
    email: string,
    id: number,
    roles: ITokenPayloadRole[],
    iat: 1671743439,
    exp: 1671829839
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseUrl: string = `${environment.origin}/auth`;

    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    get role() {
        const token = localStorage.getItem('auth_token');
        return token ? this.getJWT(token, 'role') : ''
    }

    get expire() {
        const token = localStorage.getItem('auth_token');
        return token ? this.getJWT(token, 'expire') : ''
    }

    constructor(
        private http: HttpClient,
        private routes: Router
    ) { }

    getJWT(token: string, name:string): string {
        const obj: ITokenPayload = JSON.parse(atob(token.split('.')[1]))

        switch(name) {
            case 'role': return obj.roles[0].name;
            case 'expire': {
                const date = new Date(obj.exp);
                return date.toString();
            };
            default: return '';
        }
    };


    login(body: {email: string, password: string}) {
        return this.http
        .post<{ token: string }>(`${environment.apiUrl}/auth/login`, body)
        .pipe(
            map((res) => {
                if (res.token) {
                    this.loggedIn.next(true)
                    localStorage.setItem('auth_token', res.token);
                }
                return null;
            })
        )
    };

    logout() {
        this.loggedIn.next(false)
        localStorage.removeItem('auth_token');
        this.routes.navigate(['/auth']);
    };
}
