import express from 'express';
import {
	createQuiz,
	deleteQuiz,
	getAllQuiz,
	getQuizById,
	getQuizListByUser,
	updateQuizById,
} from '../controllers/quiz-rest-controller.js';

const router = express.Router();

router.post('/create', createQuiz);

router.get('/', getAllQuiz)

router.get('/:id', getQuizById)

router.get('user/:id', getQuizListByUser)

router.patch(':/id', updateQuizById)

export default router;
