import express from 'express';
import { config } from '../config.js';
import mongoose from 'mongoose';

import questionsRoute from '../routes/api/questions-route.js'
import userRoute from '../routes/api/user-route.js'
import quizRoute from '../routes/api/quiz-route.js'
import cors from 'cors'
import { authenticateToken } from '../middleware/authentication.js';

const port = config.serverPort || 5500;
const app = express();
app.use(express.json())
app.use(cors())


/* ----------------------------- MongoDB Setup ----------------------------- */
mongoose.connect(config.DatabaseURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('open', () => console.log('[Initialize][Database] Connected to Database 🗃'));
db.on('error', (error) => console.log(error));

/* ----------------------------- Express app Setup ----------------------------- */
app.listen(port, () => console.log(`[Initialize][Server] Server is running on http://localhost:${port} 🗂`));
app.get('/', (_, res) => {
	res.status(200).send('Application is online');
});

app.use('/rest/user', userRoute);

app.use(authenticateToken)
app.use('/rest/questions', questionsRoute);
app.use('/rest/quiz', quizRoute);
