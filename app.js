import express from 'express';
import cors from 'cors';
import fs from 'fs';
import cron from 'node-cron';

const app = express();

app.use(cors());

app.get('/api/medium-feed', async (req, res) => {
	try {
		const blogFilePath = './blogs.xml';

		let xmlData = fs.readFileSync(blogFilePath, 'utf8');

		if (!xmlData) {
			console.log('Fetching Medium feed...');
			const response = await fetch('https://medium.com/feed/@vjnvisakh');

			if (!response.ok) {
				throw new Error(`Failed to fetch Medium feed: ${response.statusText}`);
			}

			xmlData = await response.text();

			fs.writeFileSync(blogFilePath, xmlData, 'utf8');
		} else {
			console.log('Using cached Medium feed');
		}

		res.set('Content-Type', 'application/xml'); // Set the correct content type
		res.send(xmlData);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error fetching Medium feed');
	}
});

// This cron removes the blogs.xml file every hour
cron.schedule('0 * * * *', () => {
	const blogFilePath = './blogs.xml';

	if (fs.existsSync(blogFilePath)) {
		console.log('Cleared blogs.xml');
		fs.writeFileSync(blogFilePath, '', 'utf8');
	} else {
		console.log('blogs.xml does not exist, skipping deletion');
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
