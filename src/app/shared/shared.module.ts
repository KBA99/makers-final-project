import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { DefaultQuizPageComponent } from './default-quiz-page/default-quiz-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
	imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        RouterModule,
	],
    declarations: [
        DefaultQuizPageComponent,
        HeaderComponent,
        PageNotFoundComponent,
        NavbarComponent
    ],
	exports: [
        ReactiveFormsModule,
        DefaultQuizPageComponent
    ],
})
export class SharedModule {}
