import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { DefaultQuizPageComponent } from './default-quiz-page/default-quiz-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
	imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
	],
    declarations: [
        DefaultQuizPageComponent,
        HeaderComponent,
        PageNotFoundComponent
    ],
	exports: [
        ReactiveFormsModule
    ],
})
export class SharedModule {}
