import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './user-authentication/login/login.component';
import { RegisterComponent } from './user-authentication/register/register.component';
import { SharedModule } from './shared/shared.module';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { AuthService } from './user-authentication/auth.service';
import { AuthGuardService } from './user-authentication/auth-guard.service';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		LoginComponent,
		RegisterComponent,
		UserAuthenticationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		SharedModule,
	],
	providers: [AuthService, AuthGuardService],
	bootstrap: [AppComponent],
})
export class AppModule {}
