import express from 'express';
import {
	createQuestion,
	deleteQuestion,
	getQuestionsByQuizId,
	getQuestionsByUser,
	updateQuestionById,
} from '../../controllers/question-rest-controller.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.send("this is working")
})

router.post('/create', createQuestion);

router.delete('/delete', deleteQuestion);

router.get('/:id', getQuestionsByQuizId);

router.patch(':/id', updateQuestionById)

router.get('user/:id', getQuestionsByUser)

export default router;
