import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export function authenticateToken(req, res, next) {
	const authHeader = req.headers['Authorization'];
	const token = authHeader?.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, config.TOKEN_SECRET, (err, user) => {
		console.log(err);

		if (err) return res.sendStatus(403);

		req.user = user;
		next();
	});
}

export function generateAccessToken(user) {
	const jwtObject = {
		id: user._id,
		email: user.email,
	};
	return jwt.sign(jwtObject, config.TOKEN_SECRET, { expiresIn: '10h' });
}
