const http = require('http');

const server = http.createServer( (req,res) =>{
	if(req.url === "/"){
		res.end('Welcome to our Home Page')
	}
	if(req.url === "/about"){
		res.end('Welcome to our About Page')
	}	
})

server.listen(5000);