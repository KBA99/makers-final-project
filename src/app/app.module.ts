import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './home-page/login/login.component';
import { RegisterComponent } from './home-page/register/register.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, HomePageComponent, LoginComponent, RegisterComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
