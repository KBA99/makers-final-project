export enum Path {
	base = 'http://localhost:7700/',
}

export enum ApiPath {
	base = 'http://localhost:7700/rest/',
}

export enum UserPath {
	register = 'user/register/',
	login = 'user/login/',
	reset = 'user/reset/',
}

export enum QuizPath {
	create = 'quiz/create/',
	delete = 'quiz/delete/',
	getQuizListByUser = 'user/',
}

export enum QuestionPath {
	create = 'questions/create/',
	delete = 'questions/delete/',
	getQuestionByUser = 'questions/user/',
}
