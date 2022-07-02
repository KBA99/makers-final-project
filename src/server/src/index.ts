import express from 'express';
import { config } from '../config.js';

const app = express();
const port = config.serverPort;

app.get('/', (_, res) => {
	res.status(200).send('Application is online');
});

app.listen(port, () => console.log(`Running on port ${port}`));
