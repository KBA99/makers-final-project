import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-user-authentication',
	templateUrl: './user-authentication.component.html',
	styleUrls: ['./user-authentication.component.scss'],
})
export class UserAuthenticationComponent implements OnInit {
	constructor(protected readonly authService: AuthService, protected readonly router: Router) {}

	ngOnInit(): void {
		this.redirectToDashboardIfSignedIn();
	}

	redirectToDashboardIfSignedIn() {
		this.authService.validateToken();
		if (this.authService.isAuthenticated()) {
			this.router.navigate(['/']);
		}
	}
}
