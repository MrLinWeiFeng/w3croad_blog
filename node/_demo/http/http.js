const http = require('http')
const conf = require('./config')
const router = require('./router')

const server = http.createServer((req, res)=> {
	router(req, res)
})

server.listen(conf.port, conf.hostname, (err)=> {
	console.log(err)
	console.log(`${conf.hostname}:${conf.port}`)
})