import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuardService } from './user-authentication/auth-guard.service';
import { LoginComponent } from './user-authentication/login/login.component';
import { RegisterComponent } from './user-authentication/register/register.component';

const routes: Routes = [
	{ path: '', canActivate: [AuthGuardService], component: HomePageComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'not-found', canActivate: [AuthGuardService], component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/not-found'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
