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

	isAuthenticated() {
		return !!this.getToken()
	}

	getToken() {
		return localStorage.getItem('Authorization');
	}

	login(credentials: Credentials) {
		this.http
			.post(ApiPath.base + UserPath.login, credentials, { observe: 'response' })
			.subscribe({
				next: (data) => {
					this.authToken = data.headers.get('Authorization');
					this._isLoggedIn = (!!this.authToken);
					this.setTokenInBrowser()
					this.redirectToHomePage()
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	logout() {
		this.authToken = null
		localStorage.clear()
		this.router.navigate(['/login'])
	}

	redirectToHomePage() {
		this.router.navigate(['/'])
	}

	register(credentials: Credentials) {
		this.http
			.post(ApiPath.base + UserPath.register, credentials, { observe: 'response' })
			.subscribe({
				next: (data) => {
					this.authToken = data.headers.get('Authorization');
					this._isLoggedIn = (!!this.authToken);
					this.setTokenInBrowser()
					this.redirectToHomePage()
				},
				error: (error) => {
					console.log(error);
				},
			});
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
				this.logout()
				console.error(error)
				console.log("logging out")
			}
		})
	}

}
