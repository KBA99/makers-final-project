import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizComponent } from './home-page/quiz/quiz.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuardService } from './user-authentication/auth-guard.service';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

const routes: Routes = [
	{ path: '', canActivate: [AuthGuardService], component: HomePageComponent, children: [
		{path: 'quiz', component: QuizComponent}
	]},
	{ path: 'login', component: UserAuthenticationComponent },
	{ path: 'not-found', canActivate: [AuthGuardService], component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
