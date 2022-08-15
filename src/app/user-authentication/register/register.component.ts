import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Credentials } from '../authentication.types';
import { UserAuthenticationComponent } from '../user-authentication.component';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['../user-authentication.component.scss'],
})
export class RegisterComponent extends UserAuthenticationComponent implements OnInit {
	constructor(
		authService: AuthService,
		router: Router
	) {
		super(authService, router);
	}

	registerForm!: FormGroup;
	passwordNoMatchError = false;

	override ngOnInit(): void {
		this.registerForm = new FormGroup({
			firstName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			lastName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			email: new FormControl(null, [
				Validators.required,
				Validators.nullValidator,
				Validators.email,
			]),
			password: new FormControl(null, [Validators.required, Validators.nullValidator]),
			confirmPassword: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	onRegister() {
		if (this.registerForm.valid) {
			if (this.registerForm.value.confirmPassword === this.registerForm.value.password) {
				const credentials = this.prepareRegisterObject(this.registerForm)
				this.authService.register(credentials)
				this.registerForm.reset()
			} else {
				this.passwordNoMatchError = true;
				setTimeout(() => {
					this.passwordNoMatchError = false;
				}, 5000);
				this.registerForm.reset()
			}
		}
	}

	prepareRegisterObject(registerForm: FormGroup) {
		return <Credentials> {
			firstName: registerForm.value.firstName,
			lastName: registerForm.value.lastName,
			email: registerForm.value.email,
			password: registerForm.value.password
		}
	}

}
