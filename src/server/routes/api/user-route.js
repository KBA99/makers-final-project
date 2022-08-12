import express from 'express';
import {
	register,
	login,
	resetPassword
} from '../../controllers/user-rest-controller.js';

const router = express.Router();

router.get('/profile/:id', (req, res) => {
	res.send("this is working")
})

router.post('/register', register);

router.post('/login', login);

router.post('/reset', resetPassword)

export default router;
