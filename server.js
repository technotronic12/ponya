const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, function () {
	console.log('Started listening on port', port)
})

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz'
	res.set('Content-Encoding', 'gzip')
	res.set('Content-Type', 'text/javascript')
	next()
})

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'))
})

app.use(express.static('dist'))
