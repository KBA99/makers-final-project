import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	constructor() {}

	registerForm!: FormGroup;


	ngOnInit(): void {
		this.registerForm = new FormGroup({
			firstName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			lastName: new FormControl(null, [Validators.required, Validators.nullValidator]),
			email: new FormControl(null, [Validators.required, Validators.nullValidator]),
			dateOfBirth: new FormControl(null, [Validators.required, Validators.nullValidator]),
			// isTextOnPage: new FormControl(null, [Validators.required, Validators.nullValidator]),
		});
	}




	onRegister() {

	}
}
