const https = require('https');

https.get('https://gateway.ipfs.io/ipfs/QmaVX4eYCu3LfRTmvrmjMZfYMgJPG7D4xkonkaUdg7cFQw', (res) => {
		console.log('statusCode:', res.statusCode);
		console.log('headers:', res.headers);

		res.on('data', (d) => {
			process.stdout.write(d);
			});

		}).on('error', (e) => {
			console.error(e);
			});
