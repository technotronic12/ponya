import express, { NextFunction, Request, Response, Express } from 'express'
import path from 'path'

const app: Express = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Started listening on port', port)
})

app.get('*.js', (req: Request, res: Response, next: NextFunction) => {
	req.url = req.url + '.gz'
	res.set('Content-Encoding', 'gzip')
	res.set('Content-Type', 'text/javascript')
	next()
})

app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '/index.html'))
})

app.use(express.static('dist'))
