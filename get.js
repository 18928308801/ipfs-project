const https = require('https');

var params = 'QmaVX4eYCu3LfRTmvrmjMZfYMgJPG7D4xkonkaUdg7cFQw'

var url = 'https://gateway.ipfs.io/ipfs/' + params

https.get(url, (res) => {
		console.log('statusCode:', res.statusCode);
		console.log('headers:', res.headers);

		res.on('data', (d) => {
			process.stdout.write(d);
			});

		}).on('error', (e) => {
			console.error(e);
			});
