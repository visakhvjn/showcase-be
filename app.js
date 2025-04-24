import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/medium-feed', async (req, res) => {
	const response = await fetch('https://medium.com/feed/@vjnvisakh');
	const xmlData = await response.text();

	res.end(xmlData);
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
