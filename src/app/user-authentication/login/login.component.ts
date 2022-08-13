import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAuthenticationComponent } from '../user-authentication.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../user-authentication.component.scss'],
})
export class LoginComponent extends UserAuthenticationComponent implements OnInit {
	loginForm!: FormGroup<{ email: FormControl<null>; password: FormControl<null> }>;

	constructor() {
		super();
	}

	override ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.nullValidator]),
			password: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}

	onLogin() {}
}
