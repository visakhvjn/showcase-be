import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/medium-feed', async (req, res) => {
	try {
		const response = await fetch('https://medium.com/feed/@vjnvisakh');

		if (!response.ok) {
			throw new Error(`Failed to fetch Medium feed: ${response.statusText}`);
		}

		const xmlData = await response.text();

		res.set('Content-Type', 'application/xml'); // Set the correct content type
		res.send(xmlData);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error fetching Medium feed');
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
