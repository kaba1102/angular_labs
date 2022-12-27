import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    ValidationErrors
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
    authForm!: FormGroup;
    error = '';

    private emailValidator(control: FormControl): ValidationErrors | null {
        const value = control.value;
        const isFormat = /^[a-zA-Z0-9]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]+$/.test(value);

        if(!isFormat) {
            return { invalidEmail: 'Формат почты неправильный' };
        }
        return null;
    }

    private passwordValidator(control: FormControl): ValidationErrors | null {
        const value = control.value;
        const hasLowercaseLetter = /[a-z]/.test(value);
        const isLengthValid = value ? value.length > 7 : false;

        const passwordValid = hasLowercaseLetter && isLengthValid;

        if (!passwordValid) {
          return { invalidPassword: 'Пароль не прошел валидацию' };
        }
        return null;
    }


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, this.emailValidator]],
            password: ['', [Validators.required, this.passwordValidator]]
        });
    }

    onSubmit() {
        if(this.authForm.valid) {
            this.authService.login(this.authForm.value)
            .subscribe(() => this.router.navigate(['main']))
        }
    }
}
