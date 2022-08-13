import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthenticationComponent } from '../user-authentication.component';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['../user-authentication.component.scss'],
})
export class RegisterComponent extends UserAuthenticationComponent implements OnInit {
	constructor() {
		super();
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

			} else {
				this.passwordNoMatchError = true;
				setTimeout(() => {
					this.passwordNoMatchError = false;
				}, 5000);
			}
		}
		// Logic to check if the email exists already
	}
}
