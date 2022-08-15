import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPath, UserPath } from '../paths';
import { Credentials } from './authentication.types';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private router: Router, private http: HttpClient) {}

	protected authToken: string | null | undefined;
	isLoggedIn = false;

	isAuthenticated() {
		return this.isLoggedIn;
	}

	login(credentials: Credentials) {
		this.http
			.post(ApiPath.base + UserPath.login, credentials, { observe: 'response' })
			.subscribe({
				next: (data) => {
					this.authToken = data.headers.get('Authorization');
					this.isLoggedIn = true;
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	logout() {}

	register(credentials: Credentials) {
		this.http
			.post(ApiPath.base + UserPath.register, credentials, { observe: 'response' })
			.subscribe({
				next: (data) => {
					this.authToken = data.headers.get('Authorization');
					this.isLoggedIn = true;
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	getToken() {
		return localStorage.getItem('token');
	}


	async setBearerToken() {
		// get token from fetch request
		const res: any = '';
		const token = await res.json();

		// set token in cookie
		document.cookie = `token=${token}`;
	}
}

