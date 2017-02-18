var express = require('express')
var app = express()
var publicIP = require('public-ip')
var os = require('os')

app.get('/', function(req, res){
	var obj = {}
	publicIP.v4().then(function(ip){
		obj.ipaddress = ip
		obj.language = req.headers['accept-language'].split(',')[0]
		obj.software = os.type()+" "+os.release()+" "+os.arch();;

		res.json(obj)
	})
})

app.listen(process.env.PORT||3000, function(){
	console.log("Server is running at http://localhost:3000")
})