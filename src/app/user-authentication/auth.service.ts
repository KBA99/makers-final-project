import { HttpClient } from '@angular/common/http';
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
	private _isLoggedIn: boolean | undefined

	getToken() {
		return localStorage.getItem('Authorization');
	}

	register(credentials: Credentials) {
		this.http
			.post(ApiPath.base + UserPath.register, credentials, { observe: 'response' })
			.subscribe({
				next: (data) => {
					this.authToken = data.headers.get('Authorization');
					this._isLoggedIn = (!!this.authToken);
					this.setTokenInBrowser()
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	isAuthenticated() {
		return !!this.getToken()
	}

	login(credentials: Credentials) {
		this.http
			.post(ApiPath.base + UserPath.login, credentials, { observe: 'response' })
			.subscribe({
				next: (data) => {
					this.authToken = data.headers.get('Authorization');
					this._isLoggedIn = (!!this.authToken);
					this.setTokenInBrowser()
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	logout() {
		this.authToken = null
		localStorage.clear()
	}

	setTokenInBrowser() {
		if (!!this.authToken) {
			return localStorage.setItem("Authorization", this.authToken)
		}
	}

	validateToken() {
		this.http.head(ApiPath.base + UserPath.authenticate).subscribe({
			next: (res) => {
				return res
			},
			error: (error) => {
				console.error(error)
			}
		})
	}

}
