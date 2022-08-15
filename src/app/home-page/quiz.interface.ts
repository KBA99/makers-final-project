export interface Question {
    _id: string;
	question: string;
	correctAnswer: string;
	option1: string;
	option2: string;
	option3?: string;
	option4?: string;
}
