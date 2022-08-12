import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { DefaultQuizPageComponent } from './default-quiz-page/default-quiz-page.component';


@NgModule({
	imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
	],
    declarations: [
        DefaultQuizPageComponent,
        HeaderComponent
    ],
	exports: [
        ReactiveFormsModule
    ],
})
export class SharedModule {}
