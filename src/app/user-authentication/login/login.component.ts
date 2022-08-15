import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Credentials } from '../authentication.types';
import { UserAuthenticationComponent } from '../user-authentication.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../user-authentication.component.scss'],
})
export class LoginComponent extends UserAuthenticationComponent implements OnInit {
	loginForm!: FormGroup<{ email: FormControl<null>; password: FormControl<null> }>;
	loginFailStatus = false;

	constructor(authService: AuthService,
				router: Router) {
		super(authService, router);
	}

	override ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.nullValidator,
				Validators.email,
			]),
			password: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	onLogin() {
		if (this.loginForm.valid) {
			const credentials = this.prepareLoginObjet(this.loginForm)
			this.authService.login(credentials)
		} else {
			this.loginFailStatus = true;
			setTimeout(() => {
				this.loginFailStatus = false;
			}, 5000);
			this.loginForm.reset()
		}
	}

	prepareLoginObjet(loginForm: FormGroup) {
		return <Credentials> {
			email: loginForm.value.email,
			password: loginForm.value.password
		}
	}
}
