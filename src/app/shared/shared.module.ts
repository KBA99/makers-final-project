import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';


@NgModule({
	imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule
	],
    declarations: [],
	exports: [
        ReactiveFormsModule
    ],
})
export class SharedModule {}
