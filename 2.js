'use strict'

const series = require('async/series')
const IPFS = require('ipfs')
const fs = require('fs')

var params = './cat.jpg'

var buffer = fs.readFileSync(params);

const node = new IPFS()
	let fileMultihash

	(cb) => node.on('ready', cb),
	(cb) => node.files.add({
		path: params,
		content: Buffer.from(buffer)
		}, (err, filesAdded) => {
			if (err) { return cb(err) }
			console.log('\nAdded file:', filesAdded[0].path, filesAdded[0].hash)
			fileMultihash = filesAdded[0].hash
			cb()
		})
