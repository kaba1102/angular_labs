import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
    authForm!: FormGroup;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if(this.authForm.valid) {
            console.log(this.authForm.value)
            /*this.authService.login(this.authForm.username.value, this.authForm.password.value)
                .pipe(first())
                .subscribe(
                    data => {
                        this.router.navigate(['main']);
                    },
                    error => {
                        this.error = error;
                });*/
        }
    }
}
