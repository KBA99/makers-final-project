import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user-authentication/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor(private readonly authService: AuthService) {}

	ngOnInit(): void {}

	onLogout() {
		this.authService.logout()
	}
}
