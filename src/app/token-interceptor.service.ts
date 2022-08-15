import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './user-authentication/auth.service';

@Injectable({
	providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
	constructor(protected readonly authService: AuthService, private readonly router: Router) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.authService.getToken();

		if (token) {
			request = request.clone({
				setHeaders: { Authorization: `${token}` },
			});
		}

		return next.handle(request).pipe(
			catchError((err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						this.router.navigate(['/login']);
					}
				}
				return throwError(err);
			})
		);
	}
}