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


	override ngOnInit(): void {
		this.registerForm = new FormGroup({
			firstName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			lastName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			email: new FormControl(null, [Validators.required, Validators.nullValidator]),
			dateOfBirth: new FormControl(null, [Validators.required, Validators.nullValidator]),
			password: new FormControl(null, [Validators.required, Validators.nullValidator]),
			confirmPassword: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}




	onRegister() {

	}
}
