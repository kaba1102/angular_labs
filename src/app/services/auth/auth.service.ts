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

    setSession(token: string) {
        if(this.isLoggedIn) {
            localStorage.setItem('auth_token', token);
            localStorage.setItem('user_name', this.getJWT(token, 'role'));
            localStorage.setItem('user_expire', this.getJWT(token, 'expire'));
        } else {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_name');
            localStorage.removeItem('user_expire');
        }

    };


    login(body: {email: string, password: string}) {
        return this.http
        .post<{ token: string }>(`${environment.apiUrl}/auth/login`, body)
        .pipe(
            map((res) => {
                if (res.token) {
                    this.loggedIn.next(true)
                    this.setSession(res.token);
                }
                return null;
            })
        )
    };

    logout() {
        this.loggedIn.next(false)
        this.setSession('')
        this.routes.navigate(['auth']);
    };
}
