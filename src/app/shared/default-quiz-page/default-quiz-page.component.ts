import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-default-quiz-page',
	templateUrl: './default-quiz-page.component.html',
	styleUrls: ['./default-quiz-page.component.scss'],
})
export class DefaultQuizPageComponent implements OnInit {
	constructor(public readonly router: Router) {}

	ngOnInit(): void {

	}
}
