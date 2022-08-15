import jwt from 'jsonwebtoken';
import { config } from '../config.js';

export function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader?.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, config.TOKEN_SECRET, (err, user) => {
		console.log(err);
		if (err) return res.sendStatus(403).send({error: err.message});
		req.user = user;
		next();
	});
}

export function verifyToken(req, res) {
	const authHeader = req.headers['authorization'];
	const token = authHeader?.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	jwt.verify(token, config.TOKEN_SECRET, (err, user) => {
		console.log(err);
		err ? res.sendStatus(401) : res.sendStatus(200)
	});
}

export function generateAccessToken(user) {
	const jwtObject = {
		id: user._id,
		email: user.email,
	};
	return jwt.sign(jwtObject, config.TOKEN_SECRET, { expiresIn: '10h' });
}
