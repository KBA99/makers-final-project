import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from '../quiz.interface';

@Component({
	selector: 'app-new-quiz',
	templateUrl: './new-quiz.component.html',
	styleUrls: ['./new-quiz.component.scss'],
})

export class NewQuizComponent implements OnInit {
	protected newQuestionForm!: FormGroup
	protected questionList: Question[] | undefined;
	public additionalDisplayedQuestions = 0


	constructor(private _snackBar: MatSnackBar) {
	}

	openSnackBar(question: Question) {
		this._snackBar.open((question ? question.question : '') + ' has been removed from question list', 'Close', {
			duration: 2000,
		});
	}

	ngOnInit(): void {
		this.newQuestionForm = new FormGroup({
			question: new FormControl(null, [Validators.required, Validators.nullValidator]),
			correctAnswer: new FormControl(null, [Validators.required, Validators.nullValidator]),
			option1: new FormControl(null, [Validators.required, Validators.nullValidator]),
			option2: new FormControl(null, [Validators.required, Validators.nullValidator]),
			option3: new FormControl(null),
			option4: new FormControl(null)
		});
	}

	onAddQuestion() {
		this.newQuestionForm.get
		if (!this.newQuestionForm?.valid) {
			return;
		} else {
			this._snackBar.open('Failed to add question')
		}
	}

	onAddAnAdditionalOption() {
		this.additionalDisplayedQuestions += 1
		if(this.additionalDisplayedQuestions > 2) {
			this._snackBar.open('There can only be a maximum of 5 multi choice questions.', 'Close', {
				duration: 2000,
			})
		}
	}

	onDeleteQuestion(question: Question) {
		// delete question by id in service
	}
}
